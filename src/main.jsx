import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Quiz-list">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>
);
