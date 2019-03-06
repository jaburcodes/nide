import gql from "graphql-tag";

const typeDefs = gql`
    type Alarme {
        _id: ID!
        sensor: Sensor!
        aceitavel: MinMax!
        emergencial: MinMax!
        perigoso: MinMax!
        createdAt: String!
    }

    type Query {
        alarme(_id: ID!): Alarme!
        alarmes: [Alarme!]!
    }

    type Mutation {
        createAlarme(
            sensor: ID!,  
            aceitavel: MinMaxInput!, 
            emergencial: MinMaxInput!, 
            perigoso: MinMaxInput!): Alarme!
    }

    input MinMaxInput {
        min: Int!
        max: Int!
    }
`;

export default typeDefs;
