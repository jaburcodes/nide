import { ApolloServer, PubSub } from "apollo-server";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import moment from "moment";
import * as dotenv from "dotenv";
import mysql from "mysql";

import rootQuery from "./modules/rootQuery";
import rootMutation from "./modules/rootMutation";

import { connectToMongo } from "./utils/db/mongo";
import { getUser } from "./utils/auth/authMethods";

import DeviceModel from "./models/Device/DeviceModel";
import SensorModel from "./models/Sensor/SensorModel";
import { Sensor } from "./modules/Sensor/SensorLoader";

import schema from "./graphql/index";

const pubsub = new PubSub();

dotenv.config();

connectToMongo();

var connection = mysql.createConnection({
    host: "18.231.168.31",
    port: "3306",
    user: "root",
    password: "Vini15964730!",
    database: "scada"
});

connection.connect(err => {
    if (err) console.error("Erro ao conectar: " + err.stack);

    console.log("MySQL connected at " + connection.threadId);
});

// Mostra todos dispositivos disponíveis.
connection.query("SELECT * FROM datasources", (error, results, fields) => {
    if (error) throw error;
    results.map(({ xid, name, dataSourceType }) => {
        const newDevice = new DeviceModel({
            xid,
            name,
            dataSourceType
        });

        if (DeviceModel.findOne({ xid })) {
            console.log("Devices already exists");
        } else {
            newDevice.save((err, res) => {
                err ? err : res;
            });
        }
    });
});

// Mostrar todos os sensores do dispositivo.
connection.query("SELECT * FROM datapoints", (error, results, fields) => {
    if (error) throw error;

    results.map(({ id, xid, dataSourceId }) => {
        if (SensorModel.findOne({ _id: id })) {
            console.log("Sensor already exists");
        } else {
            const newSensor = new SensorModel({
                _id: id,
                xid,
                dataSourceId
            });

            newSensor.save((err, res) => {
                err ? err : res;
            });
        }
    });
});

// Lê os valores dos sensores.
// Ele cria um novo campo toda vez que é transmitido.
connection.query("SELECT * FROM pointvalues", (error, results, fields) => {
    if (error) throw error;

    const lastValues = results.slice(Math.max(results.length - 5, 1));

    const newPointValue = lastValues.map(({ pointValue }) => pointValue);

    setInterval(() => {
        lastValues.map(({ dataPointId, dataType, ts }) => {
            const date = moment(ts).format("DD/MM");
            console.log(date);

            SensorModel.findOneAndUpdate(
                { _id: dataPointId },
                { $set: { dataType, pointValue: newPointValue, date } },
                { new: true }
            ).exec();
        });
    }, 50000);
});

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "RootQueryType",
//         // @ts-ignore
//         fields: {
//             ...rootQuery
//         }
//     }),
//     mutation: new GraphQLObjectType({
//         name: "RootMutationType",
//         // @ts-ignore
//         fields: {
//             ...rootMutation
//         }
//     })
// });

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    context: async ({ req, connection }) => {
        if (connection) {
            return {
                ...connection.context,
                pubsub
            };
        } else {
            // check from req
            const token = req.headers.authorization
                ? req.headers.authorization
                : "";
            const me = await getUser(token);
            return {
                me,
                pubsub
            };
        }
    }
});

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return port;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
const port = normalizePort(process.env.PORT || "4000");

server.listen(port).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
