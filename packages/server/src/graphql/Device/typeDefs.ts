import gql from "graphql-tag";

const typeDefs = gql`
    type Device {
        _id: ID!
        xid: String!
        name: String!
        dataSourceType: Int!
        latitude: String!
        longitude: String!
        sensors: [Sensor!]
    }

    type Query {
        device(_id: ID!): Device!
        devices: [Device!]!
    }

    type Mutation {
        updateDevice(name: String!, latitude: String!, longitude: String!): Device!
    }
`;

export default typeDefs;
