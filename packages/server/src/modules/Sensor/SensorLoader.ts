import AlarmeModel from "../../models/Alarme/AlarmeModel";
import SensorModel from "../../models/Sensor/SensorModel";

export const Sensor = (object, { _id }, ctx) => SensorModel.findById(_id);

export const Sensores = (object, args, ctx) =>
    SensorModel.find({})
        .populate("sensores")
        .then(sensores => sensores)
        .catch(err => err);

export const Alarme = (object, { _id }, ctx) =>
    AlarmeModel.find({ sensor: _id });
