import DeviceModel from "./DeviceModel";

export const Device = (object, { _id }, ctx) => DeviceModel.findById(_id);

export const Devices = (object, args, ctx) => DeviceModel.find({});
