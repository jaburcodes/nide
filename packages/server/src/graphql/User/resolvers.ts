import UserConnector from "../../helpers/User/User";

const resolvers = {
    Query: {
        user: async (parent, { _id }, context, info) => {
            return UserConnector.User({ _id })
                .then(user => user)
                .catch(err => err);
        },
        users: async (parent, args, context, info) => {
            return UserConnector.Users()
                .then(users => users)
                .catch(err => err);
        }
    }
};

export default resolvers;
