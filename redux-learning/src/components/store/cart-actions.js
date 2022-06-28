import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const API_URL =
  "https://react-http-c8b0d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
      dispatch(
        uiActions.updateNotification({
          status: "success",
          title: "Success",
          message: "Succesfully recieved data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.updateNotification({
          status: "error",
          title: "Error",
          message: "There occured a problem",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.updateNotification({
        status: "sent",
        title: "Sent",
        message: "Data sent",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(API_URL, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.updateNotification({
          status: "success",
          title: "Success",
          message: "Succesfully recieved data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.updateNotification({
          status: "error",
          title: "Error",
          message: "There occured a problem",
        })
      );
    }
  };
};
