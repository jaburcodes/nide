import styled from "styled-components";

interface TitleProps {
    color?: string;
    fontSize?: number;
}

const Title = styled.h1<TitleProps>`
    color: ${props => props.color || "#00A7D1"};
    align-self: flex-start;
    font-family: "Poppins";
    font-weight: bold;
    line-height: normal;
    font-size: ${props => props.fontSize || "2"}rem;
`;

export default Title;
