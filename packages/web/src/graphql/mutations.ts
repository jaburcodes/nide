import gql from "graphql-tag";

export const loginUser = gql`
    mutation loginUser($input: LoginUserInput!) {
        loginUser(input: $input) {
            token
            error
        }
    }
`;

export const updateDevice = gql`
    mutation updateDevice($name: String!, $latitude: Number!, $longitude: Number!) {
        updateDevice(name: $name, latitude: $latitude, longitude: $longitude) {
            _id
            xid
            name
            dataSourceType
            latitude
            longitude
        }
    }
`;
