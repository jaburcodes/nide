import styled from "styled-components";

const Map = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    @media screen and (min-width: 600px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
`;

export default Map;
