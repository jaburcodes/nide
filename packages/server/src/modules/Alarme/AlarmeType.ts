import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} from "graphql";

const AlarmeType = new GraphQLObjectType({
    name: "AlarmeType",
    fields: {
        aceitavel: {
            type: GraphQLInt,
            min: {
                type: GraphQLInt,
                resolve: o => o.min
            },
            max: {
                type: GraphQLInt,
                resolve: o => o.max
            }
        },
        emergencial: {
            type: GraphQLInt,
            min: {
                type: GraphQLInt,
                resolve: o => o.min
            },
            max: {
                type: GraphQLInt,
                resolve: o => o.max
            }
        },
        perigoso: {
            type: GraphQLInt,
            min: {
                type: GraphQLInt,
                resolve: o => o.min
            },
            max: {
                type: GraphQLInt,
                resolve: o => o.max
            }
        }
    }
});

export default AlarmeType;
