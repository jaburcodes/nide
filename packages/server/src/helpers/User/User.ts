import * as jwt from "jsonwebtoken";

import UserModel from "../../models/User/UserModel";
import { authenticate, encryptPassword } from "../../utils/auth/authMethods";

const UserConnector = {
    User: async ({ _id }) => await UserModel.findById(_id),
    Users: async () =>
        await UserModel.find({})
            .populate("users")
            .then(users => users)
            .catch(err => err),
    AddUser: async ({ input }) => {
        const { name, email, password } = input;

        const currentUser = await UserModel.findOne({ email });

        if (currentUser) {
            return { error: "User already exists" };
        }

        const User = new UserModel({
            name,
            email,
            password: encryptPassword(password)
        });

        await User.save();

        const token = `JWT ${jwt.sign({ id: email }, process.env.JWT)}`;

        return {
            token
        };
    },
    LoginUser: async (object, { input }, ctx) => {
        const { email, password } = input;

        if (!email || !password) {
            return { error: "Email and password must be provided" };
        }

        const User = await UserModel.findOne({ email });

        if (!User) {
            return { error: "User doesn't exist" };
        }

        console.log("User", User);
        //@ts-ignore
        const isPasswordCorrect = authenticate(password, user.password);

        if (!isPasswordCorrect) {
            throw new Error("Invalid email or password");
        }

        const token = `JWT ${jwt.sign({ id: email }, process.env.JWT)}`;

        return {
            token
        };
    }
};

export default UserConnector;
