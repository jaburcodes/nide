import AlarmeModel from "./AlarmeModel";
import SensorModel from "../Sensor/SensorModel";

export const Alarme = (object, { _id }, ctx) => AlarmeModel.findById(_id);

export const Alarmes = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);

export const CreateAlarme = (
    object,
    { _id, aceitavel, emergencial, perigoso },
    ctx
) => {
    if (SensorModel.findById(_id)) {
        const newAlarme = new AlarmeModel({
            sensor: _id,
            aceitavel,
            emergencial,
            perigoso
        });

        return new Promise((resolve, reject) => {
            newAlarme.save((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
};

export const Sensor = (object, { _id }, ctx) => SensorModel.findById(_id);
