import AlarmeModel from "../../models/Alarme/AlarmeModel";
import SensorModel from "../../models/Sensor/SensorModel";

const AlarmeConnector = {
    Alarme: async ({ _id }) => AlarmeModel.findById(_id),
    Alarmes: async () =>
        AlarmeModel.find({})
            .populate("alarmes")
            .then(alarmes => alarmes)
            .catch(err => err),
    CreateAlarme: async ({ sensor, aceitavel, emergencial, perigoso }) => {
        if (SensorModel.findById({ _id: sensor })) {
            const newAlarme = new AlarmeModel({
                sensor,
                aceitavel,
                emergencial,
                perigoso
            });

            return new Promise((resolve, reject) => {
                newAlarme.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        } else {
            return "Sensor não encontrado.";
        }
    },
    Sensor: async ({ _id }) => SensorModel.findById(_id)
};

export default AlarmeConnector;
