import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainTheme } from "./styles/theme";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider resetCSS={true} theme={MainTheme}>
    <App />
  </ChakraProvider>
);
