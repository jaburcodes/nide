import SensorModel from "./SensorModel";

export const Sensor = (object, { _id }, ctx) => SensorModel.findById(_id);
