import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import {Router, BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";
import HISTORY from "./lib/History";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter base={"/"} basename={process.env.PUBLIC_URL} >
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);


