import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from "graphql";

import AlarmeType from "./AlarmeType";
import * as Loader from "./AlarmeLoader";

export const queries = {
    alarme: {
        type: AlarmeType,
        args: {
            id: {
                type: GraphQLNonNull(GraphQLID)
            }
        },
        resolve: Loader.Alarme
    }
};
