import React, { useState } from "react";
import Modal from "react-modal";
import { Query } from "react-apollo";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import StyledDetail from "../../../utils/components/Dispositivos/Detail/Detail";
import Wrapper from "../../../utils/components/Dispositivos/Detail/Wrapper/Wrapper";

import Relatorios from "./Relatorios/Relatorios";
import Alarmes from "./Alarmes/Alarmes";
import AddAlarmeForm from "./AddAlarme/AddAlarme";

import { device } from "../../../graphql/queries";

const customStyles = {
    content: {
        width: "40%",
        height: "70%",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

const DispositivosDetail = (props: any) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);

    const _id = props.match.params.id;

    return (
        <StyledDetail>
            <Wrapper>
                <Relatorios _id={_id} />
                <Alarmes _id={_id} />
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
                        <AddAlarmeForm />
                    </div>
                </Modal>
            </Wrapper>
        </StyledDetail>
    );
};

export default DispositivosDetail;
