import UserConnector from "../../helpers/User/User";

const resolvers = {
    Query: {
        user: (parent, { _id }, context, info) => UserConnector.User({ _id }),
        users: async (parent, { id, size, page }, context, info) =>
            UserConnector.Users({ id, size, page })
                .then(users => users)
                .catch(err => err)
    },
    Mutation: {
        addUser: (parent, { name, email, password }, context, info) =>
            UserConnector.AddUser({ name, email, password })
                .then(user => user)
                .catch(err => err),
        loginUser: (parent, { email, password }, context, info) =>
            UserConnector.LoginUser({ email, password })
                .then(user => user)
                .catch(err => err)
    }
};

export default resolvers;
