import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/uiSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.cart.notification);

  if (isInitial) {
    isInitial = false;
    return;
  }

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data!",
        })
      );
      const response = await fetch(
        "https://react-http-c8b0d-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    };
    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: `${err.message}`,
          message: "sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
