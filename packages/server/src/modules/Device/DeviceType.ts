import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";

const DeviceType = new GraphQLObjectType({
    name: "DeviceType",
    fields: {
        id: {
            type: GraphQLID,
            resolve: o => o.id
        },
        xid: {
            type: GraphQLString,
            resolve: o => o.xid
        },
        name: {
            type: GraphQLString,
            resolve: o => o.name
        },
        latitude: {
            type: GraphQLInt,
            resolve: o => o.latitude
        },
        longitude: {
            type: GraphQLInt,
            resolve: o => o.longitude
        },
        dataSourceType: {
            type: GraphQLInt,
            resolve: o => o.dataSourceType
        }
    }
});

export default DeviceType;
