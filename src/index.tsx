import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter as Router } from "react-router-dom";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import App from "./App";
import Login from "./pages/auth/login";
import Preloader from "./pages/loader/preloader";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
   <Router>
    <div>
      <Route exact path="/" component={Preloader} />
      <Route path="/auth" component={Login} />
    </div>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
