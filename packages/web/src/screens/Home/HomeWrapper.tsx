import React from "react";
import { Switch, Route } from "react-router-dom";

import StyledHomeWrapper from "../../utils/components/Home/Home";
import HomeBackground from "../../utils/components/Home/HomeBackground";

import Home from "./Home";
import MapDetail from "./Map/MapDetail";
import MapHome from "./Map/MapHome";

const HomeWrapper = () => (
    <HomeBackground>
        <StyledHomeWrapper>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/visualizar" component={MapHome} />
                <Route path="/visualizar/detail" component={MapDetail} />
            </Switch>
        </StyledHomeWrapper>
    </HomeBackground>
);

export default HomeWrapper;
