import React from "react";

import StyledRelatorios from '../../../../utils/components/Dispositivos/Detail/Relatorios/Relatorios';
import Sensores from '../../../../utils/components/Dispositivos/Detail/Sensores/Sensores';

import Title from '../../../../utils/styles/Title/Title';

import Graph from './Graph/Graph';

const Relatorios = ({ history }: any) => {
    const data = [
        { x: "Jan", y: 2 },
        { x: "Fev", y: 1 },
        { x: "Mar", y: 3 },
        { x: "Abr", y: 6 }
    ];

    return (
        <StyledRelatorios>
            <Title color="black">Relatorios</Title>
            <Sensores>
                <Graph name={"X"} data={data} />
                <Graph name={"Y"} data={data} />
                <Graph name={"Tensao"} data={data} />
            </Sensores>
        </StyledRelatorios>
    );
};

export default Relatorios;
