import React from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import FontsContainer from "./assets/styles/FontsContainer";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/Header/Header/Header";
import Cart from "./components/Cart/Cart/Cart";
import List from "./components/List/List/List";
import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  console.log("dziala");
  return (
    <FontsContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <MainLayout>
            <Header />
            <Cart />
            <List />
          </MainLayout>
        </Provider>
      </ThemeProvider>
    </FontsContainer>
  );
}

export default App;
