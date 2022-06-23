import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cartState = useSelector((state) => state.cart);
  const notificationStatus = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-c8b0d-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartState),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "success!",
          message: "succesfully sent cart data",
        })
      );
    };
    sendCartData().catch((error) =>
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "error!",
          message: error.message,
        })
      )
    );
  }, [cartState, dispatch]);

  return (
    <>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
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
