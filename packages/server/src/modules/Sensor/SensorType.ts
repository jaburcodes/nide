import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";

const SensorType = new GraphQLObjectType({
    name: "SensorType",
    fields: {
        id: {
            type: GraphQLID,
            resolve: o => o.id
        },
        xid: {
            type: GraphQLString,
            resolve: o => o.xid
        },
        dataSourceId: {
            type: GraphQLID,
            resolve: o => o.dataSourceId
        }
    }
});

export default SensorType;
