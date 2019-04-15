import styled from "styled-components";

interface TipProps {
    background: string;
}

const BigTip = styled.p<TipProps>`
    width: 90px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${props => props.background};
    font-size: 1rem;
    font-family: Montserrat;
    font-weight: bold;
    line-height: normal;
`;

export default BigTip;
