import React, { useState } from "react";
import { Query } from "react-apollo";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "react-modal";

import StyledDispositivos from "../../utils/components/Dispositivos/Dispositivos";
import Wrapper from "../../utils/components/Dispositivos/Wrapper/Wrapper";
import AddDispositivoForm from "./AddDispositivo/AddDispositivo";

import DispositivoTable from "./Tables/Table";

import Title from "../../utils/styles/Title/Title";

import { me } from '../../graphql/queries';

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

const Dispositivos = ({ history }: any) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Query query={me}>
            {({ loading, error, data }) => {
                if (loading) return "";
                if (error) return `Error! ${error.message}`;

                const { _id } = data.me;

                return (
                    <StyledDispositivos>
                        <Wrapper>
                            <Title style={{ alignSelf: "center" }} color="black">
                                Dispositivos
                            </Title>
                            <DispositivoTable history={history} _id={_id} />
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
            }}
        </Query>
    );
};

export default Dispositivos;


