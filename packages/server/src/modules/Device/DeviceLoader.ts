import DeviceModel from "./DeviceModel";
import SensorModel from "../Sensor/SensorModel";

export const Device = (object, { _id }, ctx) => DeviceModel.findById(_id);

export const Devices = (object, args, ctx) =>
    DeviceModel.find({})
        .populate("devices")
        .then(posts => posts)
        .catch(err => err);

export const updateDevice = (object, { name, latitude, longitude }, ctx) => {
    DeviceModel.findOneAndUpdate(
        name,
        { $set: { latitude, longitude } },
        { new: true }
    ).exec();
};

export const Sensores = (object, { _id }, ctx) =>
    SensorModel.find({ dataSourceId: _id });
