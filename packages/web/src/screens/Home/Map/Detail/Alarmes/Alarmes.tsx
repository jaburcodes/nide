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
                    if (loadingOne || loadingTwo) return "";

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

                    let lastValue;
                    let alarme: any;
                    let nivelAlarme: any;

                    const newValue = newestData.map(({ xid, data }: any) => {
                        const lastItem = data.pop();
                        const { y: Y } = lastItem;

                        lastValue = { xid, Y };

                        return lastValue;
                    });

                    const myData = sensorAlarm.map((a: any) => {
                        alarme = a;
                        return alarme;
                    });

                    const alarmeNivel = (lastValue: any, alarme: any) => {
                        const { Y } = lastValue;
                        const { aceitavel, emergencial, perigoso } = alarme;

                        if (Y <= aceitavel.min || Y == aceitavel.max) {
                            nivelAlarme = (
                                <Tip background="#2ECC71" width={60}>
                                    Aceitável
                                </Tip>
                            );
                        } else if (
                            Y == emergencial.min ||
                            Y == emergencial.max
                        ) {
                            nivelAlarme = (
                                <Tip background="#F2C94C" width={60}>
                                    Emergencial
                                </Tip>
                            );
                        } else if (Y == perigoso.min || Y == perigoso.max) {
                            nivelAlarme = (
                                <Tip background="#EB5757" width={60}>
                                    Perigoso
                                </Tip>
                            );
                        }

                        return nivelAlarme;
                    };

                    return (
                        <Wrapper>
                            <Title color="black">Nível de Alarme</Title>
                            {alarmeNivel(lastValue, alarme)}
                        </Wrapper>
                    );
                }}
            </Query>
        )}
    </Query>
);

export default Alarmes;
