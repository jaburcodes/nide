import DeviceModel from "./DeviceModel";

export const Device = (object, args, ctx) => DeviceModel.findOne({ id: args.id });
