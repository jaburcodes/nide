import { GraphQLList, GraphQLString } from "graphql";

import SensorType from "./SensorType";
import * as Loader from "./SensorLoader";
import AlarmeType from "../Alarme/AlarmeType";

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
    },
    alarme: {
        type: AlarmeType,
        resolve: Loader.Alarme
    }
};
