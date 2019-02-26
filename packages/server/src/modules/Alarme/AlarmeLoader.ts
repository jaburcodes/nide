import AlarmeModel from "./AlarmeModel";

export const Alarme = (object, args, ctx) =>
    AlarmeModel.findOne({ id: args.id });
