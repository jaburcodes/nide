import AlarmeModel from "../../models/Alarme/AlarmeModel";
import SensorModel from "../../models/Sensor/SensorModel";

export const Alarme = (object, { _id }, ctx) => AlarmeModel.findById(_id);

export const Alarmes = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);

export const CreateAlarme = (
    object,
    { sensor, aceitavel, emergencial, perigoso },
    ctx
) =>
    AlarmeModel.findOneAndUpdate(
        sensor,
        { $set: { sensor, aceitavel, emergencial, perigoso } },
        { upsert: true, new: true },
        (err, doc) => (err ? err : doc)
    );

export const Sensor = ({ _id }, args, ctx) => SensorModel.findById({ _id });
