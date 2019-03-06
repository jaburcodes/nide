import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        hasNextPage: Boolean!
        token: String!
        error: String!
    }

    type Query {
        user(_id: ID!): User!
        users(size: Int!, page: Int!): [User!]!
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
    }
`;

export default typeDefs;
