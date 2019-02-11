import React from "react";

import StyledRelatorios from '../../../../utils/components/Dispositivos/Detail/Relatorios/Relatorios';
import Sensores from '../../../../utils/components/Dispositivos/Detail/Sensores/Sensores';

import Title from '../../../../utils/styles/Title/Title';

import X from './X/X';
import Y from './Y/Y';
import Tensao from './Tensao/Tensao';

const Relatorios = ({ history }: any) => {
    return (
        <StyledRelatorios>
            <Title color="black">Relatorios</Title>
            <Sensores>
                <X />
                <Y />
                <Tensao />
            </Sensores>
        </StyledRelatorios>
    );
};

export default Relatorios;
