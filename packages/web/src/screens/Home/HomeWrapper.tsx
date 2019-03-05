import React from "react";
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import StyledHomeWrapper from "../../utils/components/Home/Home";
import HomeBackground from "../../utils/components/Home/HomeBackground";

import Home from "./Home";
import MapDetail from "./Map/MapDetail";
import MapHome from "./Map/MapHome";

const history = createBrowserHistory();

const HomeWrapper = () => (
    <HomeBackground>
        <StyledHomeWrapper>
            <Switch>
                <Route path="/" component={Home} history={history} />
                <Route
                    path="/visualizar"
                    component={MapHome}
                    history={history}
                />
                <Route
                    path="/visualizar/detail"
                    component={MapDetail}
                    history={history}
                />
            </Switch>
        </StyledHomeWrapper>
    </HomeBackground>
);

export default HomeWrapper;
