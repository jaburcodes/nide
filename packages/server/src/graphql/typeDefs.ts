import { mergeTypes } from "merge-graphql-schemas";

import Alarme from "./Alarme/typeDefs";
import Device from "./Device/typeDefs";
import Sensor from "./Sensor/typeDefs";
import User from "./User/typeDefs";
import MinMax from "./MinMax/typeDefs";

const typeDefs = [Alarme, Device, Sensor, User, MinMax];

export default mergeTypes(typeDefs);
