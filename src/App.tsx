import React, { useState } from "react";
import { GlobalStyle } from "./components/Global/Global";
import { ThemeProvider } from "styled-components";
import light from "./components/Themes/light";
import dark from "./components/Themes/dark";
import { Home } from "./components/Pages/Home";

const App = () => {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/*PAGES */}
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default App;