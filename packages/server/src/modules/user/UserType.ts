import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} from "graphql";

import DeviceType from '../Device/DeviceType'

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        _id: {
            type: GraphQLString,
            resolve: o => o._id
        },
        email: {
            type: GraphQLString,
            resolve: o => o.email
        },
        password: {
            type: GraphQLString,
            resolve: o => o.password
        },
        devices: {
            type: GraphQLList(DeviceType),
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
