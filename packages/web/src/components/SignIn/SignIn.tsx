import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";
import { graphql } from "react-apollo";

import Button from "@material-ui/core/Button";

import { mainButtonStyle } from "../../utils/styles/Button/Button";
import Form from "../../utils/styles/Form/Form";
import Wrapper from "../../utils/styles/Form/Wrapper";
import Input from "../../utils/styles/Input/Input";
import Title from "../../utils/styles/Title/Title";
import Error from "../../utils/styles/Error/Error";
import LinkWrapper from "../../utils/components/Link/Link";

import { loginUser } from "../../graphql/mutations";

interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    title?: string;
    mutate?: any;
    history?: any;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
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

            <Wrapper>
                <LinkWrapper to="/forgot">Esqueceu a senha?</LinkWrapper>
                <Button
                    style={mainButtonStyle}
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !!(errors.email && touched.email) ||
                        !!(errors.password && touched.password)
                    }
                >
                    Entrar
                </Button>
            </Wrapper>
        </Form>
    );
};

// Wrap our form with the using withFormik HoC
const SignInForm = withFormik<MyFormProps, FormValues>({
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

    handleSubmit(
        { email, password }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        props
            .mutate({ variables: { input: { email, password } } })
            .then(({ data }: any) => {
                const { loginUser } = data;

                if (loginUser.token) {
                    localStorage.setItem("token", loginUser.token);
                    return props.history.push("/dispositivos");
                }
            })
            .catch((error: string) => {
                console.log("error", error);
                setSubmitting(false);
                setErrors({ email: "", password: "" });
            });
    },
    displayName: "FormEnhancer"
})(InnerForm);

export default graphql(loginUser)(SignInForm);
