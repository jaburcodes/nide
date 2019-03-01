import { GraphQLObjectType } from "graphql";

import SensorType from "../Sensor/SensorType";
import MinMaxType from "./MinMaxType";

const AlarmeType = new GraphQLObjectType({
    name: "AlarmeType",
    fields: () => ({
        sensor: {
            type: SensorType,
            resolve: o => o.sensor
        },
        aceitavel: {
            type: MinMaxType,
            resolve: o => o.aceitavel
        },
        emergencial: {
            type: MinMaxType,
            resolve: o => o.emergencial
        },
        perigoso: {
            type: MinMaxType,
            resolve: o => o.perigoso
        }
    })
});

export default AlarmeType;
