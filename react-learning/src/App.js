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
  );
}

export default App;
