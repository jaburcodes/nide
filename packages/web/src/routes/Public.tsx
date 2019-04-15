import React from "react";
import { Route, Redirect } from "react-router-dom";

//@ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !localStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dispositivos",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default PublicRoute;
