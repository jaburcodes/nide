import AlarmeModel from "./AlarmeModel";

export const Alarme = (object, { _id }, ctx) => AlarmeModel.findById(_id);

export const Alarmes = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);

export const CreateAlarme = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);

export const UpdateAlarme = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);
