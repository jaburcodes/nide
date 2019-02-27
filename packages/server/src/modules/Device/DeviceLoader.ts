import DeviceModel from "./DeviceModel";

export const Device = (object, { _id }, ctx) => DeviceModel.findById(_id);

export const Devices = (object, args, ctx) =>
    DeviceModel.find({})
        .populate("devices")
        .then(posts => posts)
        .catch(err => err);

export const addDevice = (object, { name, latitude, longitude }, ctx) => {
    DeviceModel.findOneAndUpdate(
        name,
        { $set: { latitude, longitude } },
        { new: true }
    ).exec();
};

export const updateDevice = (object, { name, latitude, longitude }, ctx) => {
    DeviceModel.findOneAndUpdate(
        name,
        { $set: { latitude, longitude } },
        { new: true }
    ).exec();
};
