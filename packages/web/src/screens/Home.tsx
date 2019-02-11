import React from "react";

import Button from "@material-ui/core/Button";

import StyledHome from "../utils/components/Home/Home";
import Visitante from "../utils/components/Home/Visitante/Visitante";
import SignIn from "../utils/components/Home/SignIn/SignIn";
import Wrapper from "../utils/components/Home/Wrapper/Wrapper";

import { mainButtonStyle } from "../utils/styles/Button/Button";
import { secondButtonStyle } from "../utils/styles/Button/Button";
import Input from "../utils/styles/Input/Input";
import Title from "../utils/styles/Title/Title";
import MiniTitle from "../utils/styles/MiniTitle/MiniTitle";

const Home = () => (
    <StyledHome>
        <Visitante>
            <Wrapper>
                <Title color="white">Não tem conta?</Title>
                <MiniTitle color="white">
                    Você pode visualizar os dados públicos da plataforma
                    entrando como visitante, basta clicar no botão abaixo.
                </MiniTitle>
                <Button style={secondButtonStyle}>Entrar como visitante</Button>
            </Wrapper>
        </Visitante>
        <SignIn>
            <Wrapper>
                <Title>Entrar</Title>
                <Input
                    placeholder="Nome de usuário"
                    type="email"
                    name="email"
                />
                <Input placeholder="Senha" type="password" />

                <MiniTitle>Esqueceu a senha?</MiniTitle>
                
                <Button style={mainButtonStyle}>Entrar</Button>
            </Wrapper>
        </SignIn>
    </StyledHome>
);

export default Home;
