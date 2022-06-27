import React from "react";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import FontsContainer from "./assets/styles/FontsContainer";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/Header/Header/Header";
import Cart from "./components/Cart/Cart/Cart";
import List from "./components/List/List/List";

function App() {
  console.log("dziala");
  return (
    <FontsContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <Header />
          <Cart />
          <List />
        </MainLayout>
      </ThemeProvider>
    </FontsContainer>
  );
}

export default App;
