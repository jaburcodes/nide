import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import AlarmeType from "./AlarmeType";
import MinMaxType from "./MinMaxType";
import MinMaxInputType from "./MinMaxInputType";

import * as Loader from "./AlarmeLoader";

export const queries = {
    alarme: {
        type: AlarmeType,
        args: {
            _id: {
                type: GraphQLString
            }
        },
        resolve: Loader.Alarme
    },
    alarmes: {
        type: AlarmeType,
        resolve: Loader.Alarmes
    }
};

export const mutations = {
    createAlarme: {
        type: AlarmeType,
        args: {
            sensor: {
                type: GraphQLString
            },
            aceitavel: {
                type: MinMaxInputType
            },
            emergencial: {
                type: MinMaxInputType
            },
            perigoso: {
                type: MinMaxInputType
            }
        },
        resolve: Loader.CreateAlarme
    }
};
