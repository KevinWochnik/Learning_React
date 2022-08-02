import { render } from "@testing-library/react";
import FontsContainer from "../assets/styles/FontsContainer";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";

const renderWithStyles = ({ children }) => {
  return render(
    <FontsContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </FontsContainer>
  );
};

export default renderWithStyles;
