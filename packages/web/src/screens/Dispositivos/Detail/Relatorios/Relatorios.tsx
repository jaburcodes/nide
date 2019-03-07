import React, { Fragment } from "react";
import { Query } from "react-apollo";

import StyledRelatorios from "../../../../utils/components/Dispositivos/Detail/Relatorios/Relatorios";
import Sensores from "../../../../utils/components/Dispositivos/Detail/Sensores/Sensores";

import Title from "../../../../utils/styles/Title/Title";

import Graph from "./Graph/Graph";

import { deviceSensors } from "../../../../graphql/queries";

const Relatorios = ({ _id }: any) => {
    const newData = [
        { x: "Jan", y: 2 },
        { x: "Fev", y: 1 },
        { x: "Mar", y: 3 },
        { x: "Abr", y: 6 }
    ];

    return (
        <Query query={deviceSensors} variables={{ _id }}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                // const myData = data.deviceSensors.map((sensor: any) => sensor);

                // const newestData = myData.reduce(
                //     (acc: any, item: any) => [
                //         ...acc,
                //         ...item.pointValue.map((p: any) => ({
                //             x: item.date,
                //             y: p
                //         }))
                //     ],
                //     []
                // );

                {
                    data.deviceSensors
                        .map((sensor: any) => sensor)
                        .reduce(
                            (acc: any, item: any) => [
                                {
                                    ...acc,
                                    ...item.xid,
                                    ...item.pointValue.map((p: any) => ({
                                        x: item.date,
                                        y: p
                                    }))
                                }
                            ],
                            []
                        );
                }

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
                        <Title
                            color="black"
                            onClick={() => console.log(newestData)}
                        >
                            Relatorios
                        </Title>
                        <Sensores>
                            {newestData.map(({ xid, data }: any) => (
                                <Graph name={xid} data={data} />
                            ))}
                        </Sensores>
                    </StyledRelatorios>
                );
            }}
        </Query>
    );
};

export default Relatorios;
