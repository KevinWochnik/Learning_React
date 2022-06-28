import React, { useEffect } from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import FontsContainer from "./assets/styles/FontsContainer";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/Header/Header/Header";
import Cart from "./components/Cart/Cart/Cart";
import List from "./components/List/List/List";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";
import { sendCartData, fetchCartData } from "./components/store/cart-actions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart]);

  return (
    <FontsContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          {notification && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
          <Header />
          <Cart />
          <List />
        </MainLayout>
      </ThemeProvider>
    </FontsContainer>
  );
}

export default App;
