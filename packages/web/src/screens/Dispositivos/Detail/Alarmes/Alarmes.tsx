import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Title from "../../../../utils/styles/Title/Title";

import Tip from "../../../../utils/components/Dispositivos/Table/Tip/Tip";
import StyledAlarmes from "../../../../utils/components/Dispositivos/Detail/Alarmes/Alarmes";

let id = 0;

function createData(name: any, calories: any, fat: any, carbs: any) {
    id += 1;
    return { id, name, calories, fat, carbs };
}

const rows = [
    createData("Frozen yoghurt", 1120412, "Inclinação X Alta", "20/01/2018"),
    createData(
        "Ice cream sandwich",
        2372151,
        "Risco de Desmoronamento",
        "13/03/2018"
    ),
    createData(
        "Eclair",
        262211,
        "Perigo Eminente de Desmoronamento",
        "04/06/2018"
    )
];

const Alarmes = ({ history }: any) => {
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
                                Hardware ID
                            </TableCell>
                            <TableCell
                                style={{
                                    textAlign: "start",
                                    fontFamily: "Montserrat",
                                    fontSize: "0.9rem",
                                    color: "#999999"
                                }}
                            >
                                Mensagens
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
                        {rows.map(row => (
                            <TableRow
                                style={{
                                    cursor: "pointer"
                                }}
                                key={row.id}
                            >
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
                                    <Tip>{row.name}</Tip>
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        color: "black"
                                    }}
                                >
                                    {row.calories}
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        color: "black"
                                    }}
                                >
                                    {row.fat}
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        color: "black"
                                    }}
                                >
                                    {row.carbs}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </StyledAlarmes>
    );
};

export default Alarmes;
