import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "react-modal";

import StyledDispositivos from "../../utils/components/Dispositivos/Dispositivos";
import Wrapper from "../../utils/components/Dispositivos/Wrapper/Wrapper";
import AddDispositivoForm from "./AddDispositivo/AddDispositivo";

import DispositivoTable from "./Tables/Table";

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

const Home = ({ history }: any) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);

    return (
        <StyledDispositivos>
            <Wrapper>
                <Title style={{ alignSelf: "center" }} color="black">
                    Dispositivos
                </Title>
                <DispositivoTable />
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
