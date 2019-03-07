import DeviceModel from "../../models/Device/DeviceModel";
import SensorModel from "../../models/Sensor/SensorModel";

export const Device = (object, { _id }, ctx) => DeviceModel.findById(_id);

export const Devices = (object, args, ctx) =>
    DeviceModel.find({})
        .populate("devices")
        .then(posts => posts)
        .catch(err => err);

export const updateDevice = (object, { name, latitude, longitude }, ctx) =>
    DeviceModel.findOneAndUpdate(
        name,
        { $set: { latitude, longitude } },
        { new: true },
        (err, doc) => (err ? err : doc)
    );

export const Sensores = (object, { _id }, ctx) =>
    SensorModel.find({ dataSourceId: _id });
