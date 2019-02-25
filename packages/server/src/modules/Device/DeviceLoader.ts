import DeviceModel from "./DeviceModel";

export const Devices = (object, args, ctx) =>
    DeviceModel.findOne({ id: args.id });
