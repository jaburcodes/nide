import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import Home from "./screens/Home";
import Users from "./screens/Users";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";

import client from "./graphql/client";
import reset from "./constants/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 100vh;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
`;

class App extends Component {
    render() {
        return (
            <Fragment>
                <Wrapper>
                    <ApolloProvider client={client}>
                        <BrowserRouter>
                            <Switch>
                                <PublicRoute
                                    exact
                                    path="/"
                                    component={Home}
                                />
                                <PrivateRoute
                                    exact
                                    path="/users"
                                    component={Users}
                                />
                                <PublicRoute
                                    exact
                                    path="/signup"
                                    component={Signup}
                                />
                                <PublicRoute
                                    exact
                                    path="/signin"
                                    component={Signin}
                                />
                            </Switch>
                        </BrowserRouter>
                    </ApolloProvider>
                </Wrapper>
                <GlobalStyle />
            </Fragment>
        );
    }
}

//@ts-ignore
function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                !localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/users",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

//@ts-ignore
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default App;
