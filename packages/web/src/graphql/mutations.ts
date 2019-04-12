import gql from "graphql-tag";

export const addUser = gql`
    mutation addUser($input: AddUserInput!) {
        addUser(input: $input) {
            email
            password
            hasNextPage
            token
            error
        }
    }
`;

export const loginUser = gql`
    mutation loginUser($input: LoginUserInput!) {
        loginUser(input: $input) {
            token
            error
        }
    }
`;

export const updateDevice = gql`
    mutation updateDevice(
        $name: String!
        $latitude: String!
        $longitude: String!
    ) {
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

export const createAlarme = gql`
    mutation createAlarme(
        $sensor: String!
        $aceitavel: MinMaxInput!
        $emergencial: MinMaxInput!
        $perigoso: MinMaxInput!
    ) {
        createAlarme(
            sensor: $sensor
            aceitavel: $aceitavel
            emergencial: $emergencial
            perigoso: $perigoso
        ) {
            _id
            sensor
            aceitavel {
                min
                max
            }
            emergencial {
                min
                max
            }
            perigoso {
                min
                max
            }
            createdAt
        }
    }
`;
