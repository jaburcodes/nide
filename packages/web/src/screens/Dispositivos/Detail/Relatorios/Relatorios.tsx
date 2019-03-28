import React from "react";
import { Query } from "react-apollo";

import StyledRelatorios from "../../../../utils/components/Dispositivos/Detail/Relatorios/Relatorios";
import Sensores from "../../../../utils/components/Dispositivos/Detail/Sensores/Sensores";

import Title from "../../../../utils/styles/Title/Title";

import Graph from "./Graph/Graph";

import { deviceSensors } from "../../../../graphql/queries";

const Relatorios = ({ _id }: any) => (
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

            return (
                <StyledRelatorios>
                    <Title color="black">Relatorios</Title>
                    <Sensores>
                        {newestData.map(({ xid, data }: any) => (
                            <Graph key={xid} name={xid} data={data} />
                        ))}
                    </Sensores>
                </StyledRelatorios>
            );
        }}
    </Query>
);

export default Relatorios;
