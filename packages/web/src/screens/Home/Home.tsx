import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";

import SignInForm from "../../components/SignIn/SignIn";

import Visitante from "../../utils/components/Home/Visitante/Visitante";
import SignIn from "../../utils/components/Home/SignIn/SignIn";
import Wrapper from "../../utils/components/Home/Wrapper/Wrapper";

import { secondButtonStyle } from "../../utils/styles/Button/Button";
import Title from "../../utils/styles/Title/Title";
import MiniTitle from "../../utils/styles/MiniTitle/MiniTitle";

const Home = ({ history }: any) => (
    <Fragment>
        <Visitante>
            <Wrapper>
                <Title color="white">Não tem conta?</Title>
                <MiniTitle color="white">
                    Você pode visualizar os dados públicos da plataforma
                    entrando como visitante, basta clicar no botão abaixo.
                </MiniTitle>
                <Button onClick={() => history.push('/visualizar')} style={secondButtonStyle}>Entrar como visitante</Button>
            </Wrapper>
        </Visitante>
        <SignIn>
            <SignInForm />
        </SignIn>
    </Fragment>
);

export default Home;
