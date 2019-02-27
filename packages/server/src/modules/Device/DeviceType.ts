import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} from "graphql";

import SensorType from "../Sensor/SensorType";
import * as Loader from "./DeviceLoader";

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
            type: GraphQLFloat,
            resolve: o => o.latitude
        },
        longitude: {
            type: GraphQLFloat,
            resolve: o => o.longitude
        }
    }
});

export default DeviceType;
