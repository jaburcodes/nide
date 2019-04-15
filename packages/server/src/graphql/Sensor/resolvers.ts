import SensorConnector from "../../helpers/Sensor/Sensor";

const resolvers = {
    Query: {
        sensor: async (parent, { _id }, context, info) => {
            return SensorConnector.Sensor({ _id })
                .then(sensor => sensor)
                .catch(err => err);
        },
        sensors: async (parent, args, context, info) => {
            return SensorConnector.Sensors()
                .then(sensors => sensors)
                .catch(err => err);
        }
    }
};

export default resolvers;


