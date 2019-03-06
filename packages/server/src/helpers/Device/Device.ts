import DeviceModel from "../../models/Device/DeviceModel";
import SensorModel from "../../models/Sensor/SensorModel";

const DeviceConnector = {
    Device: async ({ _id }) => DeviceModel.findById(_id),
    Devices: async () =>
        DeviceModel.find({})
            .populate("devices")
            .then(devices => devices)
            .catch(err => err),
    UpdateDevice: async ({ name, latitude, longitude }) => {
        DeviceModel.findOneAndUpdate(
            name,
            { $set: { latitude, longitude } },
            { new: true }
        ).exec();
    },
    Sensors: async ({ _id }) =>
        SensorModel.find({ dataSourceId: _id })
};

export default DeviceConnector;
