import AlarmeConnector from "../../helpers/Alarme/Alarme";

const resolvers = {
    Query: {
        alarme: async (parent, { _id }, context, info) => {
            return AlarmeConnector.Alarme({ _id })
                .then(alarme => alarme)
                .catch(err => err);
        },
        alarmes: async (parent, args, context, info) => {
            return AlarmeConnector.Alarmes()
                .then(alarmes => alarmes)
                .catch(err => err);
        }
    },
    Mutation: {
        createAlarme: async (
            parent,
            { sensor, aceitavel, emergencial, perigoso },
            context,
            info
        ) => {
            return AlarmeConnector.CreateAlarme({
                sensor,
                aceitavel,
                emergencial,
                perigoso
            });
        }
    },
    Alarme: {
        sensor: async ({ _id }, args, context, info) => {
            return await AlarmeConnector.Sensor(_id);
        }
    }
};

export default resolvers;
