import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean
} from "graphql";

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        email: {
            type: GraphQLString,
            resolve: o => o.email
        },
        password: {
            type: GraphQLString,
            resolve: o => o.password
        },
        hasNextPage: {
            type: GraphQLBoolean,
            resolve: o => o.hasNextPage
        },
        token: {
            type: GraphQLString,
            resolve: o => o.token
        },
        error: {
            type: GraphQLString,
            resolve: o => o.error
        }
    }
});

export default UserType;
