import * as jwt from "jsonwebtoken";

import UserModel from "../../models/User/UserModel";
import { authenticate, encryptPassword } from "../../utils/auth/authMethods";

const UserConnector = {
    User: async ({ _id }) => UserModel.findById(_id),
    Users: async () =>
        UserModel.find({})
            .populate("users")
            .then(users => users)
            .catch(err => err),
    AddUser: async ({ input }) => {
        const { name, email, password } = input;

        const currentUser = await UserModel.findOne({ email });
    
        if (currentUser) {
            return { error: "User already exists" };
        }
    
        const user = new UserModel({
            name,
            email,
            password: encryptPassword(password)
        });
        await user.save();
    
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
    
        const user = await UserModel.findOne({ email });
    
        if (!user) {
            return { error: "User doesnt exist" };
        }
    
        console.log("user", user);
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

