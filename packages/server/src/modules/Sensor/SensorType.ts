import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";

import AlarmeType from "../Alarme/AlarmeType";

const SensorType = new GraphQLObjectType({
    name: "SensorType",
    fields: {
        _id: {
            type: GraphQLString,
            resolve: o => o._id
        },
        xid: {
            type: GraphQLString,
            resolve: o => o.xid
        },
        pointValue: {
            type: GraphQLInt,
            resolve: o => o.pointValue
        },
        date: {
            type: GraphQLString,
            resolve: o => o.date
        },
        dataType: {
            type: GraphQLInt,
            resolve: o => o.dataType
        },
        dataSourceId: {
            type: GraphQLID,
            resolve: o => o.dataSourceId
        },
        alarme: {
            type: AlarmeType,
            resolve: o => o.alarme
        }
    }
});

export default SensorType;
