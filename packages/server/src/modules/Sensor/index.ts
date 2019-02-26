import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import SensorType from "./SensorType";
import * as Loader from "./SensorLoader";

export const queries = {
    sensor: {
        type: SensorType,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLID)
            }
        },
        resolve: Loader.Sensor
    }
};
