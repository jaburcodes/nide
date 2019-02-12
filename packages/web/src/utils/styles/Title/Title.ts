import styled from "styled-components";

const Title = styled.h1`
    color: ${props => props.color || "#00A7D1"};
    align-self: flex-start;
    font-family: "Poppins";
    font-size: 2rem;
`;

export default Title;
