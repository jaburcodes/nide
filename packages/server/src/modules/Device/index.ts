import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import DeviceType from "./DeviceType";
import * as Loader from "./DeviceLoader";

export const queries = {
    device: {
        type: DeviceType,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLID)
            }
        },
        resolve: Loader.Device
    }
};
