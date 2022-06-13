<<<<<<< HEAD
import MainTemplate from "./components/Templates/MainTemplate/MainTemplate";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner.styles";
import WelcomingTag from "./components/WelcomingTag/WelcomingTag";
import List from "./components/List/List/List";
import ContextProvider from "./components/context/ContextProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <MainTemplate>
          <Header />
          <Banner />
          <WelcomingTag />
          <List />
        </MainTemplate>
      </ContextProvider>
    </ThemeProvider>
=======
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import Cart from "./components/Cart/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from "react";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };
  const hideCartHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
>>>>>>> main
  );
}

export default App;
