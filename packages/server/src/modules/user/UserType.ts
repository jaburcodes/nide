import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
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
        devices: {
            type: GraphQLList(GraphQLString),
            resolve: o => o.devices
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
