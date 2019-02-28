import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} from "graphql";

import MinMaxType from "./MinMaxType";

const AlarmeType = new GraphQLObjectType({
    name: "AlarmeType",
    fields: () => ({
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
