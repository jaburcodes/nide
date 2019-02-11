import React from "react";
import styled from "styled-components";

import StyledHomeWrapper from "../../utils/components/Home/Home";
import StyledMapHome from "../../utils/components/Home/Map/Home/Home";

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
        <StyledMapHome>
            <Wrapper>
                <Title color="black">Para iniciar, selecione um ponto.</Title>
            </Wrapper>
        </StyledMapHome>
    </StyledHomeWrapper>
);

export default MapHome;
