import React from "react";
import { Query } from "react-apollo";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Title from "../../../../utils/styles/Title/Title";

import Tip from "../../../../utils/components/Dispositivos/Table/Tip/Tip";
import StyledAlarmes from "../../../../utils/components/Dispositivos/Detail/Alarmes/Alarmes";

import { sensorAlarm, deviceSensors } from "../../../../graphql/queries";

const Alarmes = ({ _id }: any) => (
    <Query query={sensorAlarm} variables={{ _id }}>
        {({ loading: loadingOne, data: { sensorAlarm } }: any) => (
            <Query query={deviceSensors} variables={{ _id }}>
                {({ loading: loadingTwo, data: { deviceSensors } }) => {
                    if (loadingOne || loadingTwo) return "Loading...";

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

                    const date = alarme.createdAt;

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
                        <StyledAlarmes>
                            <Title color="black">Alarmes</Title>
                            <Paper
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    gridRow: "2 / 3",
                                    boxShadow: "0",
                                    borderRadius: "0",
                                    marginTop: "25px"
                                }}
                            >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                style={{
                                                    textAlign: "start",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.9rem",
                                                    color: "#999999"
                                                }}
                                            >
                                                Nível de Alarme
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    textAlign: "start",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.9rem",
                                                    color: "#999999"
                                                }}
                                            >
                                                Sensor
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    textAlign: "start",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.9rem",
                                                    color: "#999999"
                                                }}
                                            >
                                                ID
                                            </TableCell>
                                            <TableCell
                                                style={{
                                                    textAlign: "start",
                                                    fontFamily: "Montserrat",
                                                    fontSize: "0.9rem",
                                                    color: "#999999"
                                                }}
                                            >
                                                Data
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {alarme && (
                                            <TableRow key={alarme._id}>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {alarmeNivel(
                                                        lastValue,
                                                        alarme
                                                    )}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {alarme.sensor}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {alarme._id}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {alarme.createdAt}
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </StyledAlarmes>
                    );
                }}
            </Query>
        )}
    </Query>
);

export default Alarmes;
