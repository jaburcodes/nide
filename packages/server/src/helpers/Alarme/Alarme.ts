import AlarmeModel from "../../models/Alarme/AlarmeModel";
import SensorModel from "../../models/Sensor/SensorModel";

const AlarmeConnector = {
    Alarme: async ({ _id }) => await AlarmeModel.findById(_id),
    Alarmes: async () =>
        await AlarmeModel.find({})
            .populate("alarmes")
            .then(alarmes => alarmes)
            .catch(err => err),
    CreateAlarme: ({ sensor, aceitavel, emergencial, perigoso }) => {
        if (SensorModel.findById({ _id: sensor })) {
            const newAlarme = new AlarmeModel({
                sensor,
                aceitavel,
                emergencial,
                perigoso
            });

            newAlarme.save((err, res) => (err ? err : res));

            return newAlarme;
        } else {
            return "Sensor não encontrado.";
        }
    },
    Sensor: async ({ sensor }) => await SensorModel.findById({ _id: sensor })
};

export default AlarmeConnector;
