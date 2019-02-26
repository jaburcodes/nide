import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";

const SensorType = new GraphQLObjectType({
    name: "SensorType",
    fields: {
        _id: {
            type: GraphQLString,
            resolve: o => o._id
        },
        xid: {
            type: GraphQLString,
            resolve: o => o.xid
        },
        dataSourceId: {
            type: GraphQLID,
            resolve: o => o.dataSourceId
        },
        alarme: {
            type: GraphQLString,
            resolve: o => o.alarme
        }
    }
});

export default SensorType;
