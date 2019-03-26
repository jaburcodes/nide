import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";
import { graphql, compose } from "react-apollo";

import Button from "@material-ui/core/Button";

import AlarmeWrapper from "../../../../utils/components/Dispositivos/Detail/Alarmes/Wrapper";

import { addDispositivoFormButton } from "../../../../utils/styles/Button/Button";
import Form from "../../../../utils/styles/Form/Form";
import Wrapper from "../../../../utils/styles/Form/Wrapper";
import Input from "../../../../utils/styles/Input/Input";
import Title from "../../../../utils/styles/Title/Title";
import Label from "../../../../utils/styles/Label/Label";
import Error from "../../../../utils/styles/Error/Error";

import { createAlarme } from "../../../../graphql/mutations";

const SuccessMessage = styled.h1`
    margin-top: 25px;
    align-self: center;
    font-size: 1rem;
    font-family: "Poppins";
    font-weight: bold;
    line-height: normal;
    color: #2ecc71;
`;

type InputValues = {
    min: number;
    max: number;
};

interface FormValues {
    sensor: number;
    aceitavel: InputValues;
    emergencial: InputValues;
    perigoso: InputValues;
}

interface OtherProps {
    title?: string;
    mutate?: any;
    history?: any;
}

interface MyFormProps {
    mutate?: any;
    history?: any;
    createAlarme: (variables: any) => any;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        status,
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
            <Title>Adicionar Alarme</Title>

            <Label>Sensor</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Sensor"
                    type="text"
                    name="sensor"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sensor && values.sensor}
                />
                {touched.sensor &&
                    touched.sensor &&
                    errors.sensor &&
                    errors.sensor && <Error>Mínimo inválido.</Error>}
            </AlarmeWrapper>

            <Label>Nível Aceitável</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="number"
                    name="aceitavel.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aceitavel && values.aceitavel.min}
                />
                {touched.aceitavel &&
                    touched.aceitavel.min &&
                    errors.aceitavel &&
                    errors.aceitavel.min && <Error>Mínimo inválido.</Error>}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="number"
                    name="aceitavel.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aceitavel && values.aceitavel.max}
                />
                {touched.aceitavel &&
                    touched.aceitavel.max &&
                    errors.aceitavel &&
                    errors.aceitavel.max && <Error>Máximo inválido.</Error>}
            </AlarmeWrapper>

            <Label>Nível Emergencial</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="number"
                    name="emergencial.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergencial && values.emergencial.min}
                />
                {touched.emergencial &&
                    touched.emergencial.min &&
                    errors.emergencial &&
                    errors.emergencial.min && <Error>Mínimo inválido.</Error>}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="number"
                    name="emergencial.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emergencial && values.emergencial.max}
                />
                {touched.emergencial &&
                    touched.emergencial.max &&
                    errors.emergencial &&
                    errors.emergencial.max && <Error>Máximo inválido.</Error>}
            </AlarmeWrapper>

            <Label>Nível Perigoso</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="number"
                    name="perigoso.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.perigoso && values.perigoso.min}
                />
                {touched.perigoso &&
                    touched.perigoso.min &&
                    errors.perigoso &&
                    errors.perigoso.min && <Error>Mínimo inválido.</Error>}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="number"
                    name="perigoso.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.perigoso && values.perigoso.max}
                />
                {touched.perigoso &&
                    touched.perigoso.max &&
                    errors.perigoso &&
                    errors.perigoso.max && <Error>Máximo inválido.</Error>}
            </AlarmeWrapper>

            {status && <SuccessMessage>Atualizado com sucesso!</SuccessMessage>}

            <Wrapper style={{ justifyContent: "center", marginTop: "25px" }}>
                <Button
                    style={addDispositivoFormButton}
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.aceitavel && touched.aceitavel) ||
                        !!(errors.emergencial && touched.emergencial) ||
                        !!(errors.perigoso && touched.perigoso)
                    }
                >
                    Salvar
                </Button>
            </Wrapper>
        </Form>
    );
};

const AddAlarmeForm = withFormik<MyFormProps, FormValues>({
    validationSchema: Yup.object().shape({
        sensor: Yup.number().required("Sensor é obrigatório"),
        aceitavel: Yup.object().shape({
            min: Yup.number().required("Mínimo é obrigatório"),
            max: Yup.number().required("Máximo é obrigatório")
        }),
        emergencial: Yup.object().shape({
            min: Yup.number().required("Mínimo é obrigatório"),
            max: Yup.number().required("Máximo é obrigatório")
        }),
        perigoso: Yup.object().shape({
            min: Yup.number().required("Mínimo é obrigatório"),
            max: Yup.number().required("Máximo é obrigatório")
        })
    }),

    handleSubmit(
        { sensor, aceitavel, emergencial, perigoso }: FormValues,
        { props, setSubmitting, setErrors, setStatus }
    ) {
        props
            .createAlarme({
                variables: { sensor, aceitavel, emergencial, perigoso }
            })
            .then(() => setStatus({ success: true }))
            .catch((e: any) => {
                setSubmitting(false);
                setErrors({
                    sensor: "",
                    aceitavel: {
                        min: "",
                        max: ""
                    },
                    emergencial: {
                        min: "",
                        max: ""
                    },
                    perigoso: {
                        min: "",
                        max: ""
                    }
                });
            });
    },
    displayName: "FormEnhancer"
})(InnerForm);

export default compose(graphql(createAlarme, { name: "createAlarme" }))(
    AddAlarmeForm
);
