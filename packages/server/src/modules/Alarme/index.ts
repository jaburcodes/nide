import { GraphQLString, GraphQLList } from "graphql";

import AlarmeType from "./AlarmeType";
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
        type: GraphQLList(AlarmeType),
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
