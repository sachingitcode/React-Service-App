import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import EntryPoint from "./EntryPoint";

// it is entry point,
// Here We are using ReactDOM lib to render. for Mob application we use react native
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <EntryPoint />
  </React.StrictMode>
);
