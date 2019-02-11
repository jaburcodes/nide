import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

import Button from "@material-ui/core/Button";

import { mainButtonStyle } from "../../utils/styles/Button/Button";
import Form from "../../utils/styles/Form/Form";
import Input from "../../utils/styles/Input/Input";
import Title from "../../utils/styles/Title/Title";
import Error from "../../utils/styles/Error/Error";

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
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
            <Title>Entrar</Title>
            <Input
                placeholder="Nome de usuário"
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

            <Link to="/forgot">Esqueceu a senha?</Link>
            <Button
                style={mainButtonStyle}
                type="submit"
                disabled={isSubmitting}
            >
                Entrar
            </Button>
        </Form>
    );
};

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit(values: FormValues) {
        console.log(values);
    }
})(InnerForm);

const SignInForm = () => <FormEnhancer />;

export default SignInForm;
