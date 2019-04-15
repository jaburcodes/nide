import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} from "graphql";

const DeviceType = new GraphQLObjectType({
    name: "DeviceType",
    fields: {
        _id: {
            type: GraphQLID,
            resolve: o => o._id
        },
        xid: {
            type: GraphQLString,
            resolve: o => o.xid
        },
        name: {
            type: GraphQLString,
            resolve: o => o.name
        },
        dataSourceType: {
            type: GraphQLInt,
            resolve: o => o.dataSourceType
        },
        latitude: {
            type: GraphQLString,
            resolve: o => o.latitude
        },
        longitude: {
            type: GraphQLString,
            resolve: o => o.longitude
        }
    }
});

export default DeviceType;
