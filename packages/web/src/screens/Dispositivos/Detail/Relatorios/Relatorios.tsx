import React, { Fragment } from "react";
import { Query } from "react-apollo";

import StyledRelatorios from "../../../../utils/components/Dispositivos/Detail/Relatorios/Relatorios";
import Sensores from "../../../../utils/components/Dispositivos/Detail/Sensores/Sensores";

import Title from "../../../../utils/styles/Title/Title";

import Graph from "./Graph/Graph";

import { deviceSensors } from "../../../../graphql/queries";

const Relatorios = ({ _id }: any) => {
    // const data = [
    //     { x: "Jan", y: 2 },
    //     { x: "Fev", y: 1 },
    //     { x: "Mar", y: 3 },
    //     { x: "Abr", y: 6 }
    // ];

    return (
        <Query query={deviceSensors} variables={{ _id }}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <StyledRelatorios>
                        {data.sensors.map((sensor: any) => {
                            const newData = sensor.map(
                                ({ date, pointValue }: any) => {
                                    return {
                                        date,
                                        ...pointValue
                                    };
                                }
                            );

                            <Fragment>
                                <Title
                                    color="black"
                                    onClick={() => console.log(newData)}
                                >
                                    Relatorios
                                </Title>
                                {/* <Sensores>
                                    <Graph name={sensor.xid} data={data} />
                                </Sensores> */}
                            </Fragment>;
                        })}
                    </StyledRelatorios>
                );
            }}
        </Query>
    );
};

export default Relatorios;
