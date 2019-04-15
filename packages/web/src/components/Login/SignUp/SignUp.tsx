import React from "react";
import styled from 'styled-components';
import * as Yup from "yup";
import { withFormik, FormikProps, Field, FieldArray } from "formik";
import { graphql } from "react-apollo";

import Button from "@material-ui/core/Button";

import { mainButtonStyle } from "../../../utils/styles/Button/Button";
import Form from "../../../utils/styles/Form/Form";
import Wrapper from "../../../utils/styles/Form/Wrapper";
import Input from "../../../utils/styles/Input/Input";
import Title from "../../../utils/styles/Title/Title";
import Error from "../../../utils/styles/Error/Error";
import LinkWrapper from "../../../utils/components/Link/Link";

import { addUser } from "../../../graphql/mutations";

const AddDispositivo = styled.h1`
    color: #00A7D1;
    text-decoration: uppercase;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Poppins";
    font-weight: bold;
    line-height: normal;  
    align-self: flex-start;
`;

const IconStyled = styled.button`
    color: #00A7D1;
    text-decoration: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Poppins";
    font-weight: bold;
    line-height: normal;
    cursor: pointer;
    border: none;
    background: none;
`;

const InputsWrapper = styled.div`
    align-self: flex-start;
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

interface FormValues {
    email: string;
    password: string;
    devices: Array<string>;
}

interface OtherProps {
    title?: string;
    mutate?: any;
    history: any;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    initialDevices?: Array<string>;
    mutate?: any;
    history: any;
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
            <Title>Criar Conta</Title>
            <Input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {touched.email && errors.email && <Error>{errors.email}</Error>}

            <Input
                placeholder="Senha"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {touched.password && errors.password && (
                <Error>{errors.password}</Error>
            )}

            <AddDispositivo>Dispositivos</AddDispositivo>

            <FieldArray
                name="devices"
                render={helpers => (
                    <div style={{ width: "100%" }}>
                        {values.devices && values.devices.length > 0 ? (
                            values.devices.map((device, index) => (
                                <InputsWrapper key={index}>
                                    <Field name={`devices.${index}`} />
                                    <IconStyled type="button" onClick={() => helpers.remove(index)}>-</IconStyled>
                                    <IconStyled type="button" onClick={() => helpers.insert(index, '')}>+</IconStyled>
                                </InputsWrapper>
                            ))
                        ) : (
                                <IconStyled type="button" onClick={() => helpers.push('')}>
                                    Add
                            </IconStyled>
                            )}
                    </div>
                )}
            />
            {touched.devices && errors.devices && (
                <Error>{errors.devices}</Error>
            )}

            <Wrapper>
                <LinkWrapper to="/">Entrar</LinkWrapper>
                <Button
                    style={mainButtonStyle}
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.email && touched.email) ||
                        !!(errors.password && touched.password) ||
                        !!(errors.devices && touched.devices)
                    }
                >
                    Criar
                </Button>
            </Wrapper>
        </Form>
    );
};

const SignUpForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || "",
        devices: props.initialDevices || []
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
        devices: Yup.array().of(Yup.string())
            .required('Must have friends')
    }),

    handleSubmit(
        { email, password, devices }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(email, password, devices);
        // props
        //     .mutate({ variables: { input: { email, password, devices } } })
        //     .then(({ data }: any) => {
        //         const { addUser } = data;

        //         if (addUser.token) {
        //             localStorage.setItem("token", addUser.token);
        //         }
        //     })
        //     .then(() => props.history.push("/dispositivos"))
        //     .catch((error: string) => {
        //         console.log("error", error);
        //         setSubmitting(false);
        //         setErrors({ email: "", password: "" });
        //     });
    }
})(InnerForm);

//@ts-ignore
export default graphql(addUser)(SignUpForm);