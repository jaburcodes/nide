import SensorModel from "../../models/Sensor/SensorModel";

const SensorConnector = {
    Sensor: async ({ _id }) => SensorModel.findById(_id),
    Sensors: async () =>
        SensorModel.find({})
            .populate("sensors")
            .then(sensors => sensors)
            .catch(err => err)
};

export default SensorConnector;
