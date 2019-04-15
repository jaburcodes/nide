import styled from "styled-components";

const StyledHomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 95%;
    max-width: 900px;
    height: 95vh;
    max-height: 500px;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;

export default StyledHomeWrapper;
