import React from "react";
import ReactDom from 'react-dom';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./redux/Store"
import {BrowserRouter} from "react-router-dom"
ReactDom.render(
<Provider store={store}>
<BrowserRouter>
    <App/>
    </BrowserRouter>
</Provider>
    ,document.getElementById("root")
)