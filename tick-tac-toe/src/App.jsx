import Router from "./Router";
import { GlobalStyles } from "./Styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App
