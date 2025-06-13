import { useContext } from 'react';
import Router from "./Router";
import { GlobalStyles } from "./Styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/theme"
import { ThemeContext } from "./Context/ThemeContext.jsx";

function App() {
  const {theme} = useContext(ThemeContext);

  const mode = (theme === "light" ? lightTheme : darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App
