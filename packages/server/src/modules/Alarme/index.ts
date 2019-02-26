import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import DeviceType from "./AlarmeType";
import * as Loader from "./AlarmeLoader";

export const queries = {
    devices: {
        type: DeviceType,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLID)
            }
        },
        resolve: Loader.Device
    },
};