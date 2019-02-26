import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import DeviceType from "./DeviceType";
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
    }
};
