import React from "react";
import styled from "styled-components";

import StyledHomeWrapper from "../../utils/components/Home/Home";
import Intro from "../../utils/components/Home/Map/Intro/Intro";
import Map from "../../utils/components/Home/Map/Map/Map";

import Title from "../../utils/styles/Title/Title";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 70%;
`;

const MapHome = () => (
    <StyledHomeWrapper>
        <Intro>
            <Wrapper>
                <Title color="black">Para iniciar, selecione um ponto.</Title>
            </Wrapper>
        </Intro>
        <Map>
            <Title color="black">Map</Title>
        </Map>
    </StyledHomeWrapper>
);

export default MapHome;
