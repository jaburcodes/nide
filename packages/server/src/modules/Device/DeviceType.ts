import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from "graphql";

import SensorType from "../Sensor/SensorType";

const DeviceType = new GraphQLObjectType({
    name: "DeviceType",
    fields: {
        _id: {
            type: GraphQLString,
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
            type: GraphQLInt,
            resolve: o => o.latitude
        },
        longitude: {
            type: GraphQLInt,
            resolve: o => o.longitude
        },
        sensores: {
            type: GraphQLList(SensorType),
            resolve: o => o.sensores
        }
    }
});

export default DeviceType;
