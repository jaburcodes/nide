import { GraphQLObjectType, GraphQLString } from "graphql";

import MinMaxType from "./MinMaxType";

const AlarmeType = new GraphQLObjectType({
    name: "AlarmeType",
    fields: () => ({
        _id: {
            type: GraphQLString,
            resolve: o => o._id
        },
        sensor: {
            type: GraphQLString,
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
        },
        createdAt: {
            type: GraphQLString,
            resolve: o => o.createdAt
        }
    })
});

export default AlarmeType;
