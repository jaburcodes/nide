import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { createBrowserHistory } from "history";

import PublicRoute from "./routes/Public";
import PrivateRoute from "./routes/Private";

import HomeWrapper from "./screens/Home/HomeWrapper";

import MapHome from "./screens/Home/Map/MapHome";
import MapDetail from "./screens/Home/Map/Detail/MapDetail";

import Dispositivos from "./screens/Dispositivos/Dispositivos";
import DispositivosDetail from "./screens/Dispositivos/Detail/DispositivosDetail";

import client from "./graphql/client";
import reset from "./constants/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const history = createBrowserHistory();

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 100vh;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
`;

const App = () => (
    <Fragment>
        <Wrapper>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute
                            exact
                            path="/"
                            component={HomeWrapper}
                            history={history}
                        />
                        <PublicRoute
                            exact
                            path="/signup"
                            component={HomeWrapper}
                            history={history}
                        />
                        <PublicRoute
                            exact
                            path="/visualizar"
                            component={MapHome}
                            history={history}
                        />
                        <PublicRoute
                            exact
                            path="/visualizar/detail"
                            component={MapDetail}
                            history={history}
                        />
                        <PrivateRoute
                            exact
                            path="/dispositivos"
                            component={Dispositivos}
                            history={history}
                        />
                        <PrivateRoute
                            exact
                            path="/dispositivos/:id"
                            component={DispositivosDetail}
                            history={history}
                        />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        </Wrapper>
        <GlobalStyle />
    </Fragment>
);

export default App;
