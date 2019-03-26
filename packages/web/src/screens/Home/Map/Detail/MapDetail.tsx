import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import Alarmes from "./Alarmes/Alarmes";
import Sensores from "./Sensores/Sensores";

import Title from "../../../../utils/styles/Title/Title";

import { device } from "../../../../graphql/queries";

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
    justify-content: space-evenly;
`;

interface DetailProps {
    _id?: string;
}

const MapDetail: React.FC<DetailProps> = ({ _id }) => (
    <Query query={device} variables={{ _id }}>
        {({ loading, error, data }) => {
            if (loading) return "";
            if (error) return `Error! ${error.message}`;

            const { _id, name } = data.device;

            return (
                <WholeWrapper>
                    <Wrapper>
                        <Title color="black">{name}</Title>
                    </Wrapper>

                    <Alarmes _id={_id} />

                    <Sensores _id={_id} />
                </WholeWrapper>
            );
        }}
    </Query>
);

export default MapDetail;
