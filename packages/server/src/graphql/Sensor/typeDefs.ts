import gql from "graphql-tag";

const typeDefs = gql`
    type Sensor {
        _id: ID!
        xid: String!
        pointValue: [Int!]
        date: String
        dataType: Int
        dataSourceId: ID!
        alarme: Alarme
    }

    type Query {
        sensor(_id: ID!): Sensor!
        sensors: [Sensor!]!
    }
`;

export default typeDefs;
