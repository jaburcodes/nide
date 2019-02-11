import React from "react";

import StyledDetail from "../../../utils/components/Dispositivos/Detail/Detail";
import Wrapper from "../../../utils/components/Dispositivos/Detail/Wrapper/Wrapper";

import Relatorios from './Relatorios/Relatorios';
import Alarmes from './Alarmes/Alarmes';

const DispositivosDetail = ({ history }: any) => {
    return (
        <StyledDetail>
            <Wrapper>
                <Relatorios />
                <Alarmes />
            </Wrapper>
        </StyledDetail>
    );
};

export default DispositivosDetail;
