import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import Title from "../../../../../utils/styles/Title/Title";
import BigTip from "../../../../../utils/components/Home/Map/Detail/BigTip";

import { deviceSensors } from "../../../../../graphql/queries";

const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const TipsWrapper = styled.div`
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

interface SensoresProps {
    _id?: string;
}

const Sensores: React.FC<SensoresProps> = ({ _id }) => (
    <Query query={deviceSensors} variables={{ _id }}>
        {({ loading, error, data }) => {
            if (loading) return "";
            if (error) return `Error! ${error.message}`;

            const newestData = data.deviceSensors
                .map((sensor: any) => sensor)
                .reduce(
                    (acc: any, item: any) => [
                        {
                            ...acc,
                            xid: item.xid,
                            data: item.pointValue.map((p: any) => ({
                                x: item.date,
                                y: p
                            }))
                        }
                    ],
                    []
                );

            const newValue = newestData.map(({ xid, data }: any) => {
                const lastValue = data.pop();
                const { y: Y } = lastValue;

                return { xid, Y };
            });

            return (
                <Wrapper>
                    <Title color="black">Sensores</Title>
                    {newValue.map(({ Y }: any) => (
                        <TipsWrapper key={Y}>
                            <BigTip background="#2ECC71">{Y}</BigTip>
                        </TipsWrapper>
                    ))}
                </Wrapper>
            );
        }}
    </Query>
);

export default Sensores;
