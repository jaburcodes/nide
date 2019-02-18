import styled from "styled-components";

interface TipProps {
    background?: string;
    width?: number;
}

const Tip = styled.p<TipProps>`
    width: ${props => props.width || 100}%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${props => props.background};
    font-size: 0.8rem;
    font-family: Montserrat;
`;

export default Tip;
