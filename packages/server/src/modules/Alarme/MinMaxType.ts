import { GraphQLObjectType, GraphQLInt } from "graphql";

const MinMaxType = new GraphQLObjectType({
    name: "MinMaxType",
    description: "MinMaxType",
    fields: () => ({
        min: {
            type: GraphQLInt,
            resolve: o => o.min
        },
        max: {
            type: GraphQLInt,
            resolve: o => o.max
        }
    })
});

export default MinMaxType;
