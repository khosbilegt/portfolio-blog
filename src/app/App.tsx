import React from "react";
import Router from "./Router";
import { ThemeProvider } from "./ThemeContext";
import { NextUIProvider } from "@nextui-org/system";

function App() {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
