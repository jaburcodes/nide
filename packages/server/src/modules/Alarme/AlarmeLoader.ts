import AlarmeModel from "./AlarmeModel";

export const Alarme = (object, { _id }, ctx) => AlarmeModel.findById(_id);

export const Alarmes = (object, args, ctx) => AlarmeModel.find({});
