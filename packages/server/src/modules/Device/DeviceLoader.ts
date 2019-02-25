import DeviceModel from "./DeviceModel";

export const Devices = (object, { id }, ctx) => DeviceModel.findOne({ id });
