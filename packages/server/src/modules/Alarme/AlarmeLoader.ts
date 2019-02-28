import AlarmeModel from "./AlarmeModel";

export const Alarme = (object, { _id }, ctx) => AlarmeModel.findById(_id);

export const Alarmes = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);

export const CreateAlarme = (
    object,
    { aceitavel, emergencial, perigoso },
    ctx
) => {
    const newAlarme = new AlarmeModel({
        aceitavel: {
            min: aceitavel.min,
            max: aceitavel.max
        },
        emergencial: {
            min: emergencial.min,
            max: emergencial.max
        },
        perigoso: {
            min: perigoso.min,
            max: perigoso.max
        }
    });

    return new Promise((resolve, reject) => {
        newAlarme.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

export const UpdateAlarme = (object, args, ctx) =>
    AlarmeModel.find({})
        .populate("alarmes")
        .then(alarmes => alarmes)
        .catch(err => err);
