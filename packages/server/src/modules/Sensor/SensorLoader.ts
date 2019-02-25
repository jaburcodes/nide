import SensorModel from "./SensorModel";

export const Sensor = (object, { id }, ctx) => SensorModel.findOne({ id });
