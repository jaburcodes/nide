import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        hasNextPage: Boolean!
        token: String!
        error: String!
    }

    type Query {
        user(_id: ID!): User!
        users: [User!]!
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): User!
        loginUser(email: String!, password: String!): User!
    }
`;

export default typeDefs;
