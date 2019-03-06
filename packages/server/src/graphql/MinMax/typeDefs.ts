import gql from "graphql-tag";

const typeDefs = gql`
    type MinMax {
        min: Int!
        max: Int!
    }
`;

export default typeDefs;
