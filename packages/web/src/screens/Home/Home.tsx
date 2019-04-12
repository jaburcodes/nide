import React, { Fragment } from "react";
import { Switch, Route } from 'react-router-dom';
import Button from "@material-ui/core/Button";

import Wrapper from "../../utils/components/Home/Wrapper/Wrapper";
import Visitante from "../../utils/components/Home/Visitante/Visitante";

import SignIn from "../../utils/components/Home/SignIn/SignIn";
import SignInForm from '../../components/Login/SignIn/SignIn';
import SignUpForm from '../../components/Login/SignUp/SignUp';
import FriendList from '../../components/Login/SignUp/FriendList';

import { secondButtonStyle } from "../../utils/styles/Button/Button";
import Title from "../../utils/styles/Title/Title";
import MiniTitle from "../../utils/styles/MiniTitle/MiniTitle";

interface HomeProps {
    history: any;
}

const Home: React.FC<HomeProps> = ({ history }: any) => (
    <Fragment>
        <Visitante>
            <Wrapper>
                <Title color="white">Não tem conta?</Title>
                <MiniTitle color="white">
                    Você pode visualizar os dados públicos da plataforma
                    entrando como visitante, basta clicar no botão abaixo.
                </MiniTitle>
                <Button
                    onClick={() => history.push("/visualizar")}
                    style={secondButtonStyle}
                >
                    Entrar como visitante
                </Button>
            </Wrapper>
        </Visitante>
        <SignIn>
            <Switch>
                <Route exact path="/" component={SignInForm} history={history} />
                <Route exact path="/signup" component={FriendList} history={history} />
            </Switch>
        </SignIn>

    </Fragment>
);

export default Home;
