import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from "./components/pages/Game";
import Rank from "./components/pages/Rank";

const Router = () => {
    return (
        <Switch>
            <Route path="/game" component={Game}/>
            <Route path="/rank" component={Rank}/>
            <Redirect from="*" to="/game"/>
        </Switch>
    );
}

export default Router;