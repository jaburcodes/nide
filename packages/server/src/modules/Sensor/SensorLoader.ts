import SensorModel from "./SensorModel";

export const Sensor = (object, args, ctx) => SensorModel.findOne({ id: args.id });
