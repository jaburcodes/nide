import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import SensorType from "./SensorType";
import * as Loader from "./SensorLoader";

export const queries = {
    sensor: {
        type: SensorType,
        args: {
            _id: {
                type: GraphQLString
            }
        },
        resolve: Loader.Sensor
    },
    sensores: {
        type: GraphQLList(SensorType),
        resolve: Loader.Sensores
    }
};
