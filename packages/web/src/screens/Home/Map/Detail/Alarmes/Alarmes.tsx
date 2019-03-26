import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import Title from "../../../../../utils/styles/Title/Title";
import Tip from "../../../../../utils/components/Dispositivos/Table/Tip/Tip";

import { sensorAlarm, deviceSensors } from "../../../../../graphql/queries";

const Wrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

interface AlarmesProps {
    _id?: string;
}

const Alarmes: React.FC<AlarmesProps> = ({ _id }) => (
    <Query query={sensorAlarm} variables={{ _id }}>
        {({ loading: loadingOne, data: { sensorAlarm } }: any) => (
            <Query query={deviceSensors} variables={{ _id }}>
                {({ loading: loadingTwo, data: { deviceSensors } }) => {
                    if (loadingOne || loadingTwo)
                        return "Loading...";

                    const newestData = deviceSensors
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

                        return { xid, Y }
                    });
                    
                    // const myFunction = newValue.map(({ Y }: number) => {

                    // })

                    console.log("newValue from two queries", newValue);

                    const myData = sensorAlarm.map((alarme: any) =>
                        console.log("alarme from two queries: ", alarme)
                    );

                    return (
                        <Wrapper>
                            <Title color="black">Nível de Alarme</Title>
                            <Tip background="#2ECC71" width={60}>
                                {_id}
                            </Tip>
                        </Wrapper>
                    );
                }}
            </Query>
        )}
    </Query>
);

export default Alarmes;
