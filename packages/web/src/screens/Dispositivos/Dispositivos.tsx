import React, { useState, Fragment } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import StyledDispositivos from '../../utils/components/Dispositivos/Dispositivos';

let id = 0;

const createData = (
    name: any,
    calories: any,
    fat: any,
    carbs: any,
    protein: any
) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
};

const rows = [
    createData("Curitiba 1", 159, 6.0, 24, 4.0),
    createData("Barragem Brumadinho 1", 237, 9.0, 37, 4.3),
    createData("Barragem Brumadinho 2", 237, 9.0, 37, 4.3),
    createData("Barragem Mariana 1", 237, 9.0, 37, 4.3)
];

const Home = ({ history }: any) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true);

    const handleDrawerClose = () => setOpen(false);

    return (
        <StyledDispositivos>
            <h1>Dispositivos</h1>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome do Dispositivo</TableCell>
                            <TableCell align="center">Latitude</TableCell>
                            <TableCell align="center">Longitude</TableCell>
                            <TableCell align="center">Quantidade de Sensores</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </StyledDispositivos>
    );
};

export default Home;
