// import * as jwt from "jsonwebtoken";

// import UserModel from "../../models/User/UserModel";
// import { authenticate, encryptPassword } from "../../utils/auth/authMethods";

import * as jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";

import UserModel from "../../models/User/UserModel";
import {
    createToken,
    verifyToken,
    encryptPassword,
    comparePassword
} from "../../utils/newAuth/";

const UserConnector = {
    User: async ({ _id }) => await UserModel.findById(_id),
    Users: async () =>
        UserModel.find()
            .populate("users")
            .then(users => users)
            .catch(err => err),
    AddUser: async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            // Validate the data
            if (!email) {
                return reject({ message: "You must provide a email." });
            } else if (!isEmail(email)) {
                return reject({ message: "You must provide a valid email." });
            }

            if (!password) {
                return reject({ message: "You must provide a password." });
            }

            return encryptPassword(password, (err, hash) => {
                if (err) {
                    return reject(
                        new Error("The password could not be hashed.")
                    );
                }

                return UserModel.create(
                    Object.assign({ email, password }, { password: hash })
                )
                    .then(user => {
                        resolve(createToken({ _id: user._id, email }));
                    })
                    .catch(err2 => {
                        if (err2.code === 11000) {
                            return reject({
                                message:
                                    "There is already a user with this email."
                            });
                        }

                        return reject(err2);
                    });
            });
        });
    },
    LoginUser: async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            // Validate the data
            if (!email) {
                return reject({ message: "You must provide a email." });
            } else if (!isEmail(email)) {
                return reject({ message: "You must provide a valid email." });
            }
            if (!password) {
                return reject({ message: "You must provide a password." });
            }

            // Find the user
            return UserModel.findOne({ email })
                .then(user => {
                    if (!user) {
                        return reject({
                            message: "Authentication failed. User not found."
                        });
                    }

                    return comparePassword(
                        password,
                        password,
                        (err, isMatch) => {
                            if (err) {
                                return reject(err);
                            }
                            if (!isMatch) {
                                return reject({ message: "Wrong password." });
                            }

                            return resolve(
                                createToken({
                                    _id: user._id,
                                    email
                                })
                            );
                        }
                    );
                })
                .catch(err => reject(err));
        });
    },
    isAuthenticated: ({ token }) => {
        return new Promise((resolve, reject) => {
            if (!token) {
                return reject({ message: "The user token is empty." });
            }

            return verifyToken(token, (err, decoded) => {
                if (err) {
                    return reject({ message: "You must be authenticated." });
                }

                return resolve(decoded);
            });
        });
    }
};

export default UserConnector;
