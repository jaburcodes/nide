import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

import Button from "@material-ui/core/Button";

import AlarmeWrapper from "../../../../utils/components/Dispositivos/Detail/Alarmes/Wrapper";

import { addDispositivoFormButton } from "../../../../utils/styles/Button/Button";
import Form from "../../../../utils/styles/Form/Form";
import Wrapper from "../../../../utils/styles/Form/Wrapper";
import Input from "../../../../utils/styles/Input/Input";
import Title from "../../../../utils/styles/Title/Title";
import Label from "../../../../utils/styles/Label/Label";
import Error from "../../../../utils/styles/Error/Error";

interface FormValues {
    aceitavel: InputValues;
    emergencial: InputValues;
    perigoso: InputValues;
}

interface InputValues {
    min: number;
    max: number;
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
            <Title>Adicionar Alarme</Title>

            <Label>Nível Aceitável</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="text"
                    name="aceitavel.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.min &&
                    errors.aceitavel &&
                    errors.aceitavel.min && (
                        <Error>{errors.aceitavel.min}</Error>
                    )}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="text"
                    name="aceitavel.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.max &&
                    errors.aceitavel &&
                    errors.aceitavel.max && (
                        <Error>{errors.aceitavel.max}</Error>
                    )}
            </AlarmeWrapper>

            <Label>Nível Emergencial</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="text"
                    name="aceitavel.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.min &&
                    errors.aceitavel &&
                    errors.aceitavel.min && (
                        <Error>{errors.aceitavel.min}</Error>
                    )}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="text"
                    name="aceitavel.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.max &&
                    errors.aceitavel &&
                    errors.aceitavel.max && (
                        <Error>{errors.aceitavel.max}</Error>
                    )}
            </AlarmeWrapper>

            <Label>Nível Perigoso</Label>
            <AlarmeWrapper>
                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Mínimo"
                    type="text"
                    name="aceitavel.min"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.min &&
                    errors.aceitavel &&
                    errors.aceitavel.min && (
                        <Error>{errors.aceitavel.min}</Error>
                    )}

                <Input
                    width={45}
                    style={{ marginTop: "25px" }}
                    placeholder="Máximo"
                    type="text"
                    name="aceitavel.max"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.aceitavel &&
                    touched.aceitavel.max &&
                    errors.aceitavel &&
                    errors.aceitavel.max && (
                        <Error>{errors.aceitavel.max}</Error>
                    )}
            </AlarmeWrapper>
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
        { aceitavel, emergencial, perigoso }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(aceitavel, emergencial, perigoso);
    },
    displayName: "FormEnhancer"
})(InnerForm);

export default AddAlarmeForm;
