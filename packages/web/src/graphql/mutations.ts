import gql from "graphql-tag";

export const loginUser = gql`
    mutation loginUser($input: LoginUserInput!) {
        loginUser(input: $input) {
            token
            error
        }
    }
`;
