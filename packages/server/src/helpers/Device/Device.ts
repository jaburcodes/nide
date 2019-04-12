import DeviceModel from "../../models/Device/DeviceModel";
import SensorModel from "../../models/Sensor/SensorModel";
import UserModel from "../../models/User/UserModel";

const DeviceConnector = {
    Device: async ({ _id }) => await DeviceModel.findById(_id),
    Devices: async () =>
        await DeviceModel.find({})
            .populate("devices")
            .then(devices => devices)
            .catch(err => err),
    UpdateDevice: ({ name, latitude, longitude }) =>
        DeviceModel.findOneAndUpdate(
            name,
            { $set: { latitude, longitude } },
            { new: true },
            (err, doc) => err ? err : doc
        ),
    Sensors: async ({ _id }) => await SensorModel.find({ dataSourceId: _id }),
    User: async ({ _id }) => await UserModel.find({ _id })
};

export default DeviceConnector;
