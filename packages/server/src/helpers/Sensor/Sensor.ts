import SensorModel from "../../models/Sensor/SensorModel";

const SensorConnector = {
    Sensor: async ({ _id }) => await SensorModel.findById(_id),
    Sensors: async () =>
        await SensorModel.find({})
            .populate("sensors")
            .then(sensors => sensors)
            .catch(err => err)
};

export default SensorConnector;
