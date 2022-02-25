import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import {Router, BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";
import HISTORY from "./lib/History";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


