import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import App from "./App";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
