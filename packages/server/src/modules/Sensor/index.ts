import { GraphQLList, GraphQLString } from "graphql";

import * as Loader from "./SensorLoader";
import SensorType from "./SensorType";
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
    sensorAlarm: {
        type: GraphQLList(AlarmeType),
        args: {
            _id: {
                type: GraphQLString
            }
        },
        resolve: Loader.Alarme
    }
};
