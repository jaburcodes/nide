import React, { useState } from "react";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import { addDispositivoFormButton } from "../../../utils/styles/Button/Button";
import Form from "../../../utils/styles/Form/Form";
import Wrapper from "../../../utils/styles/Form/Wrapper";
import Input from "../../../utils/styles/Input/Input";
import Title from "../../../utils/styles/Title/Title";
import MiniTitle from "../../../utils/styles/MiniTitle/MiniTitle";
import Error from "../../../utils/styles/Error/Error";

interface FormValues {
    alarme: string;
    latitude: number;
    longitude: number;
}

interface OtherProps {
    title?: string;
    mutate?: any;
    history?: any;
}

interface MyFormProps {
    mutate?: any;
    history?: any;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const [porta1, setPorta1] = useState<string>("");
    const [porta2, setPorta2] = useState<string>("");
    const [porta3, setPorta3] = useState<string>("");
    const [porta4, setPorta4] = useState<string>("");

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <Title>Adicionar Dispositivo</Title>
            <Input
                style={{ marginTop: "25px" }}
                placeholder="Nome do Alarme"
                type="text"
                name="alarme"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.alarme}
            />
            {touched.alarme && errors.alarme && <Error>{errors.alarme}</Error>}

            <Input
                style={{ marginTop: "25px" }}
                placeholder="Latitude"
                type="text"
                name="latitude"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.latitude}
            />
            {touched.latitude && errors.latitude && (
                <Error>{errors.latitude}</Error>
            )}

            <Input
                style={{ marginTop: "25px" }}
                placeholder="Longitude"
                type="text"
                name="longitude"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.longitude}
            />
            {touched.longitude && errors.longitude && (
                <Error>{errors.longitude}</Error>
            )}

            <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor="age-simple">Porta 1</InputLabel>
                <Select
                    value={porta1}
                    onChange={e => setPorta1(e.target.value)}
                    inputProps={{
                        name: "Porta 1",
                        id: "porta-1"
                    }}
                >
                    <MenuItem value="">
                        <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"sensorX"}>
                        Sensor de Inclinação X
                    </MenuItem>
                    <MenuItem value={"sensorY"}>
                        Sensor de Inclinação Y
                    </MenuItem>
                    <MenuItem value={"sensorTensao"}>Sensor de Tensão</MenuItem>
                </Select>
            </FormControl>

            <FormControl style={{ width: "100%", marginTop: "25px" }}>
                <InputLabel htmlFor="age-simple">Porta 2</InputLabel>
                <Select
                    value={porta2}
                    onChange={e => setPorta2(e.target.value)}
                    inputProps={{
                        name: "Porta 2",
                        id: "porta-2"
                    }}
                >
                    <MenuItem value="">
                        <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"sensorX"}>
                        Sensor de Inclinação X
                    </MenuItem>
                    <MenuItem value={"sensorY"}>
                        Sensor de Inclinação Y
                    </MenuItem>
                    <MenuItem value={"sensorTensao"}>Sensor de Tensão</MenuItem>
                </Select>
            </FormControl>

            <FormControl style={{ width: "100%", marginTop: "25px" }}>
                <InputLabel htmlFor="age-simple">Porta 3</InputLabel>
                <Select
                    value={porta3}
                    onChange={e => setPorta3(e.target.value)}
                    inputProps={{
                        name: "Porta 3",
                        id: "porta-3"
                    }}
                >
                    <MenuItem value="">
                        <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"sensorX"}>
                        Sensor de Inclinação X
                    </MenuItem>
                    <MenuItem value={"sensorY"}>
                        Sensor de Inclinação Y
                    </MenuItem>
                    <MenuItem value={"sensorTensao"}>Sensor de Tensão</MenuItem>
                </Select>
            </FormControl>

            <FormControl style={{ width: "100%", marginTop: "25px" }}>
                <InputLabel htmlFor="age-simple">Porta 4</InputLabel>
                <Select
                    value={porta4}
                    onChange={e => setPorta4(e.target.value)}
                    inputProps={{
                        name: "Porta 4",
                        id: "porta-4"
                    }}
                >
                    <MenuItem value="">
                        <em>Nenhuma</em>
                    </MenuItem>
                    <MenuItem value={"sensorX"}>
                        Sensor de Inclinação X
                    </MenuItem>
                    <MenuItem value={"sensorY"}>
                        Sensor de Inclinação Y
                    </MenuItem>
                    <MenuItem value={"sensorTensao"}>Sensor de Tensão</MenuItem>
                </Select>
            </FormControl>

            <MiniTitle style={{ marginTop: "25px" }} color="rgb(0, 167, 209)">
                + Adicionar Porta
            </MiniTitle>

            <Wrapper style={{ justifyContent: "center", marginTop: "25px" }}>
                <Button
                    style={addDispositivoFormButton}
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.alarme && touched.alarme) ||
                        !!(errors.latitude && touched.latitude) ||
                        !!(errors.longitude && touched.longitude)
                    }
                >
                    Entrar
                </Button>
            </Wrapper>
        </Form>
    );
};

// Wrap our form with the using withFormik HoC
const AddDispositivoForm = withFormik<MyFormProps, FormValues>({
    validationSchema: Yup.object().shape({
        alarme: Yup.string().required("Alarme is required"),
        latitude: Yup.number().required("Latitude is required"),
        longitude: Yup.number().required("Longitude is required")
    }),

    handleSubmit(
        { alarme, latitude, longitude }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(alarme, latitude, longitude);
    },
    displayName: "FormEnhancer"
})(InnerForm);

export default AddDispositivoForm;
