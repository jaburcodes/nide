import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "react-modal";

import StyledDispositivos from "../../utils/components/Dispositivos/Dispositivos";
import Wrapper from "../../utils/components/Dispositivos/Wrapper/Wrapper";
import TableWrapper from "./Table/Table";
import AddDispositivoForm from "./AddDispositivo/AddDispositivo";

import Title from "../../utils/styles/Title/Title";

const customStyles = {
    content: {
        width: "40%",
        height: "80%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

let id = 0;

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number
) {
    id += 1;
    return { id, name, calories, fat, carbs };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24),
    createData("Ice cream sandwich", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 63),
    createData("Gingerbread", 356, 16.0, 49),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 63)
];

const Home = ({ history }: any) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);

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
                    <TableWrapper rows={rows} />
                </Paper>
                <Fab
                    onClick={() => handleOpen()}
                    style={{
                        backgroundColor: "#00A7D1",
                        color: "#FFF",
                        alignSelf: "flex-end",
                        justifySelf: "flex-end",
                        marginTop: "20px"
                    }}
                    aria-label="Add"
                >
                    <AddIcon />
                </Fab>
                <Modal
                    isOpen={open}
                    onRequestClose={handleOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            backgroundColor: "white"
                        }}
                    >
                        <AddDispositivoForm />
                    </div>
                </Modal>
            </Wrapper>
        </StyledDispositivos>
    );
};

export default Home;
