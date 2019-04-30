import DeviceModel from "../../models/Device/DeviceModel";
import SensorModel from "../../models/Sensor/SensorModel";

export const Device = (object, { _id }, ctx) => DeviceModel.findById(_id);

export const Devices = (object, args, ctx) =>
    DeviceModel.find({})
        .populate("devices")
        .then(devices => devices)
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

export const AddDeviceOwner = (object, { _id, owner }, ctx) =>
    DeviceModel.findOneAndUpdate(
        _id,
        { $set: { owner } },
        { new: true },
        (err, doc) => (err ? err : doc)
    );
