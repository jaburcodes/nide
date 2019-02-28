import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import DeviceType from "./DeviceType";
import SensorType from "../Sensor/SensorType";
import * as Loader from "./DeviceLoader";

export const queries = {
    device: {
        type: DeviceType,
        args: {
            _id: {
                type: GraphQLString
            }
        },
        resolve: Loader.Device
    },
    devices: {
        type: GraphQLList(DeviceType),
        resolve: Loader.Devices
    },
    deviceSensors: {
        type: GraphQLList(SensorType),
        args: {
            _id: {
                type: GraphQLString
            }
        },
        resolve: Loader.Sensores
    }
};

export const mutations = {
    updateDevice: {
        type: DeviceType,
        args: {
            name: {
                type: GraphQLString
            },
            latitude: {
                type: GraphQLString
            },
            longitude: {
                type: GraphQLString
            }
        },
        resolve: Loader.updateDevice
    }
};
