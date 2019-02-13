import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableWrapper = ({ rows }: any) => (
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
                    Nome do Dispositivo
                </TableCell>
                <TableCell
                    style={{
                        textAlign: "start",
                        fontFamily: "Montserrat",
                        fontSize: "0.9rem",
                        color: "#999999"
                    }}
                >
                    Latitude
                </TableCell>
                <TableCell
                    style={{
                        textAlign: "start",
                        fontFamily: "Montserrat",
                        fontSize: "0.9rem",
                        color: "#999999"
                    }}
                >
                    Longitude
                </TableCell>
                <TableCell
                    style={{
                        textAlign: "start",
                        fontFamily: "Montserrat",
                        fontSize: "0.9rem",
                        color: "#999999"
                    }}
                >
                    Quantidade de Sensores
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row: any) => (
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
                        {row.name}
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
);

export default TableWrapper;
