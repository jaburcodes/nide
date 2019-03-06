import DeviceConnector from "../../helpers/Device/Device";

const resolvers = {
    Query: {
        device: async (parent, { _id }, context, info) => {
            return DeviceConnector.Device({ _id })
                .then(device => device)
                .catch(err => err);
        },
        devices: async (parent, args, context, info) => {
            return DeviceConnector.Devices()
                .then(devices => devices)
                .catch(err => err);
        }
    },
    Mutation: {
        updateDevice: async (
            parent,
            { name, latitude, longitude },
            context,
            info
        ) => {
            DeviceConnector.UpdateDevice({ name, latitude, longitude })
                .then(device => device)
                .catch(err => err);
        }
    },
    Device: {
        sensors: async ({ _id }, args, context, info) => {
            return DeviceConnector.Sensors(_id)
        }
    }
};

export default resolvers;
