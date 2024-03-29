import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./core/App";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./Redux_store/store";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
