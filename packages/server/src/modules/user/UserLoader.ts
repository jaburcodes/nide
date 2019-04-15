import * as jwt from "jsonwebtoken";

import UserModel from "../../models/User/UserModel";
import DeviceModel from "../../models/Device/DeviceModel";

import { authenticate, encryptPassword } from "../../utils/auth/authMethods";

export const Users = async (object, args, ctx) => {
    const { id, size, page } = args;
    const where = { id };
    const offset = page * size;

    const totalCount = await UserModel.count(where);
    const hasNextPage = Number(totalCount) > offset + size;

    const edges = await UserModel.find(where)
        .limit(size)
        .skip(offset);

    return {
        edges,
        hasNextPage,
        totalCount
    };
};

export const User = (object, args, ctx) => UserModel.findOne({ id: args.id });

export const AddUser = async (object, args, ctx) => {
    const { email, password, devices } = args.input;
    const currentUser = await UserModel.findOne({ email });

    if (currentUser) {
        return { error: "User already exists" };
    }

    const user = new UserModel({
        email,
        password: encryptPassword(password),
        devices
    });

    await user.save();

    const token = `JWT ${jwt.sign({ id: email }, process.env.JWT)}`;

    return {
        token
    };
};

export const LoginUser = async (object, args, ctx) => {
    const { email, password } = args.input;
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
};
