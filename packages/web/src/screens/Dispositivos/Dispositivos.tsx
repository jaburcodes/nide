import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import StyledDispositivos from "../../utils/components/Dispositivos/Dispositivos";
import Wrapper from "../../utils/components/Dispositivos/Wrapper/Wrapper";

import Title from "../../utils/styles/Title/Title";

let id = 0;

function createData(name: any, calories: any, fat: any, carbs: any) {
    id += 1;
    return { id, name, calories, fat, carbs };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 63),
    createData("Gingerbread", 356, 16.0, 49)
];

const Home = ({ history }: any) => {
    return (
        <StyledDispositivos>
            <Wrapper>
                <Title style={{ alignSelf: "center" }} color="black">
                    Dispositivos
                </Title>
                <Paper
                    style={{
                        width: "100%",
                        height: "100%",
                        gridRow: "2 / 3",
                        boxShadow: "0",
                        borderRadius: "0"
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "1rem",
                                        color: "black"
                                    }}
                                >
                                    Nome do Dispositivo
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "1rem",
                                        color: "black"
                                    }}
                                >
                                    Latitude
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "1rem",
                                        color: "black"
                                    }}
                                >
                                    Longitude
                                </TableCell>
                                <TableCell
                                    style={{
                                        textAlign: "start",
                                        fontSize: "1rem",
                                        color: "black"
                                    }}
                                >
                                    Quantidade de Sensores
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
                                            color: "black"
                                        }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            textAlign: "start",
                                            fontSize: "0.9rem",
                                            color: "black"
                                        }}
                                    >
                                        {row.calories}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            textAlign: "start",
                                            fontSize: "0.9rem",
                                            color: "black"
                                        }}
                                    >
                                        {row.fat}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            textAlign: "start",
                                            fontSize: "0.9rem",
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
            </Wrapper>
        </StyledDispositivos>
    );
};

export default Home;
