import React from "react";
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Main from "../pages/Main/Main";

const Routes = () => {
    return (
        <Router>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
        </Router>
    );
};

export default Routes;
