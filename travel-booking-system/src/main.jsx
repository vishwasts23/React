import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./App.css";

import ThemeProvider from "./context/ThemeContext";
import BookingProvider from "./context/BookingContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);