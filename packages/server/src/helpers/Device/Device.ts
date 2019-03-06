import DeviceModel from "../../models/Device/DeviceModel";
import SensorModel from "../../models/Sensor/SensorModel";

const DeviceConnector = {
    Device: async ({ _id }) => await DeviceModel.findById(_id),
    Devices: async () =>
        await DeviceModel.find({})
            .populate("devices")
            .then(devices => devices)
            .catch(err => err),
    UpdateDevice: async ({ name, latitude, longitude }) =>
        await DeviceModel.findOneAndUpdate(
            name,
            { $set: { latitude, longitude } },
            { new: true }
        ).then(device => device),
    Sensors: async ({ _id }) => await SensorModel.find({ dataSourceId: _id })
};

export default DeviceConnector;
