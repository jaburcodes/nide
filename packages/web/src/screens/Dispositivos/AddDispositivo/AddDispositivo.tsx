import React, { useState } from "react";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";
import { graphql, compose } from "react-apollo";

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
import Error from "../../../utils/styles/Error/Error";

import { updateDevice } from "../../../graphql/mutations";

interface FormValues {
    name: string;
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
    updateDevice: (variables: any) => any;
}

interface InputType {}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const [porta1, setPorta1] = useState<string>("");
    const [input, setInput] = useState<Array<InputType>>([]);

    const addNewInput = () => {
        const newInput = (
            <FormControl style={{ width: "100%", marginTop: "25px" }}>
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
        );
        setInput([...input, newInput]);
    };

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
            <Title>Atualizar</Title>
            <Input
                style={{ marginTop: "25px" }}
                placeholder="Nome"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
            />
            {touched.name && errors.name && <Error>Nome inválido.</Error>}

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
                <Error>Latitude inválida.</Error>
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
                <Error>Longitude inválida.</Error>
            )}

            <Wrapper style={{ justifyContent: "center", marginTop: "25px" }}>
                <Button
                    style={addDispositivoFormButton}
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.name && touched.name) ||
                        !!(errors.latitude && touched.latitude) ||
                        !!(errors.longitude && touched.longitude)
                    }
                >
                    Atualizar
                </Button>
            </Wrapper>
        </Form>
    );
};

// Wrap our form with the using withFormik HoC
const AddDispositivoForm = withFormik<MyFormProps, FormValues>({
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        latitude: Yup.number().required("Latitude obrigatória"),
        longitude: Yup.number().required("Longitude obrigatória")
    }),

    handleSubmit(
        { name, latitude, longitude }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(name, latitude, longitude);

        props
            .updateDevice({ variables: { name, latitude, longitude } })
            .then((response: any) => {
                console.log("SUCCESS BITCHh!!!!");
                props.history.push("/dispositivos");
            })
            .catch((e: any) => {
                const errors = e.graphQLErrors.map((err: any) => err.message);
                console.log("error", errors);
                setSubmitting(false);
                setErrors({ name: "", latitude: "", longitude: "" });
            });
    },
    displayName: "FormEnhancer"
})(InnerForm);

export default compose(graphql(updateDevice, { name: "updateDevice" }))(
    AddDispositivoForm
);
