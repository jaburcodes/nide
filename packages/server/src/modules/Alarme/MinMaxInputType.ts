import { GraphQLInt, GraphQLInputObjectType } from "graphql";

const MinMaxInputType = new GraphQLInputObjectType({
    name: "MinMaxInput",
    description: "Min max input",
    fields: () => ({
        min: {
            type: GraphQLInt
        },
        max: {
            type: GraphQLInt
        }
    })
});

export default MinMaxInputType;
