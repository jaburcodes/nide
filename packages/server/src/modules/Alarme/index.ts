import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import AlarmeType from "./AlarmeType";
import MinMaxType from "./MinMaxType";

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
            aceitavel: {
                type: MinMaxType
            },
            emergencial: {
                type: MinMaxType
            },
            perigoso: {
                type: MinMaxType
            }
        },
        resolve: Loader.CreateAlarme
    }
};
