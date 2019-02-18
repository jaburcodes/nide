import React from "react";
import styled from "styled-components";

import Title from "../../../utils/styles/Title/Title";
import MiniTitle from "../../../utils/styles/MiniTitle/MiniTitle";
import Tip from "../../../utils/components/Dispositivos/Table/Tip/Tip";
import BigTip from "../../../utils/components/Home/Map/Detail/BigTip";

const WholeWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const TipsWrapper = styled.div`
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

interface DetailProps {
    pointName?: string;
    pointAddress?: string;
    pointNivel?: string;
    pointX?: number;
    pointY?: number;
}

const MapDetail: React.FC<DetailProps> = ({
    pointName,
    pointAddress,
    pointNivel,
    pointX,
    pointY
}) => (
    <WholeWrapper>
        <Wrapper>
            <Title color="black">{pointName}</Title>
            <MiniTitle color="black">{pointAddress}</MiniTitle>
        </Wrapper>

        <Wrapper>
            <Title color="black">Nível de Alarme</Title>
            <Tip background="#2ECC71" width={60}>
                {pointNivel}
            </Tip>
        </Wrapper>

        <Wrapper>
            <Title color="black">Sensores</Title>
            <TipsWrapper>
                <BigTip background="#2ECC71">{pointX}</BigTip>
                <BigTip background="#EB5757">{pointY}</BigTip>
            </TipsWrapper>
        </Wrapper>
    </WholeWrapper>
);

export default MapDetail;
