import { mergeResolvers } from "merge-graphql-schemas";

import Alarme from "./Alarme/resolvers";
import Device from "./Device/resolvers";
import Sensor from "./Sensor/resolvers";
import User from "./User/resolvers";

const resolvers = [Alarme, Device, Sensor, User];

export default mergeResolvers(resolvers);
