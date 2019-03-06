import { mergeTypes } from "merge-graphql-schemas";

import Alarme from "./Alarme/typeDefs";
import Device from "./Device/typeDefs";
import Sensor from "./Sensor/typeDefs";
import User from "./User/typeDefs";
import MinMax from "./MinMax/typeDefs";
import Auth from "./Auth/typeDefs";
import Error from "./Error/typeDefs";

const typeDefs = [Alarme, Device, Sensor, User, MinMax, Auth, Error];

export default mergeTypes(typeDefs);
