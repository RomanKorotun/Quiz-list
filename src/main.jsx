import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/Quiz-list">
      <GlobalStyle />
      <App />
    </HashRouter>
  </StrictMode>
);
