import React, { Component } from "react";
import { Query } from "react-apollo";

import { Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import PaginationWrapped from "./Pagination";

import { devices } from "../../../graphql/queries";

interface DispositivoProps {
    classes?: any;
    history?: any;
    theme?: Theme;
    style?: React.CSSProperties;
}

let counter = 0;

const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: any
) => {
    counter += 1;
    return { id: counter, name, calories, fat, carbs };
};

class DispositivoTable extends Component<DispositivoProps, {}> {
    state = {
        rows: [
            createData("Cupcake", 305, 3.7, 3.7),
            createData("Donut", 452, 25.0, 3.7),
            createData("Eclair", 262, 16.0, 3.7),
            createData("Frozen yoghurt", 159, 6.0, 3.7),
            createData("Gingerbread", 356, 16, 3.7),
            createData("Honeycomb", 408, 3.2, 3.7),
            createData("Ice cream sandwich", 237, 9.0, 3.7),
            createData("Jelly Bean", 375, 0.0, 3.7),
            createData("KitKat", 518, 26.0, 3.7),
            createData("Lollipop", 392, 0.2, 3.7),
            createData("Marshmallow", 318, 0, 3.7),
            createData("Nougat", 360, 19.0, 3.7),
            createData("Oreo", 437, 18.0, 3.7)
        ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
        page: 0,
        rowsPerPage: 10
    };

    handleChangePage = (event: any, page: any) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = (event: any) => {
        this.setState({ page: 0, rowsPerPage: event.target.value });
    };

    onDispositivoClick = (_id: any) => {
        const { history } = this.props;

        history.push({ pathname: `/dispositivos/${_id}` });
    }

    render() {
        const { rows, rowsPerPage, page } = this.state;
        const emptyRows =
            rowsPerPage -
            Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        return (
            <Query query={devices}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Paper
                            style={{
                                width: "100%",
                                height: "100%",
                                gridRow: "2 / 3",
                                boxShadow: "0",
                                borderRadius: "0"
                            }}
                        >
                            <div>
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
                                        {data.devices.map((device: any) => (
                                            <TableRow 
                                                key={device._id} 
                                                onClick={() => this.onDispositivoClick(device._id)}>
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
                                                    {device.name}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {device.latitude}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {device.longitude}
                                                </TableCell>
                                                <TableCell
                                                    style={{
                                                        textAlign: "start",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500,
                                                        color: "black"
                                                    }}
                                                >
                                                    {device.name}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                                rowsPerPageOptions={[5, 10]}
                                                colSpan={3}
                                                count={rows.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                SelectProps={{
                                                    native: true
                                                }}
                                                onChangePage={
                                                    this.handleChangePage
                                                }
                                                onChangeRowsPerPage={
                                                    this.handleChangeRowsPerPage
                                                }
                                                ActionsComponent={
                                                    PaginationWrapped
                                                }
                                            />
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </Paper>
                    );
                }}
            </Query>
        );
    }
}

export default DispositivoTable;
