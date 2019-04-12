import React from "react";
import { Switch, Route } from "react-router-dom";

import SignInForm from './SignIn/SignIn';
import SignUpForm from './SignUp/SignUp';

const Login = ({ history }: any) => (
  <Switch>
    <Route path="/" component={SignInForm} history={history} />
    <Route path="/signup" component={SignUpForm} history={history} />
  </Switch>
);

export default Login;