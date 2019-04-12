import UserConnector from "../../helpers/User/User";

const resolvers = {
    Query: {
        user: (parent, { _id }, context, info) => UserConnector.User({ _id }),
        users: async (parent, args, context, info) =>
            UserConnector.Users()
                .then(users => users)
                .catch(err => err)
    },
    Mutation: {
        addUser: (parent, { email, password, device }, context, info) => {
            const errors = [];

            return UserConnector.AddUser({ email, password, device })
                .then(token => ({
                    token,
                    errors
                }))
                .catch(err => {
                    if (err.message) {
                        errors.push();
                        return { token: null, errors };
                    }

                    throw new Error(err);
                });
        },
        loginUser: (parent, { email, password }, context, info) => {
            const errors = [];

            return UserConnector.LoginUser({ email, password })
                .then(token => ({
                    token,
                    errors
                }))
                .catch(err => {
                    if (err.message) {
                        errors.push();
                        return { token: null, errors };
                    }

                    throw new Error(err);
                });
        }
    },
    User: {
        device: async ({ _id }, args, context, info) =>
            UserConnector.Device({ _id })
    }
};

export default resolvers;
