require("dotenv").config();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt-nodejs";

const { SECRET, EXPIRES_IN } = process.env;

let num: number;
let str: string;
let bool: boolean;
let error: Error;

export const getTokenFromRequest = req =>
    req.body.token || req.params.token || req.headers.authorization;

export const createToken = payload =>
    jwt.sign(payload, SECRET, {
        expiresIn: EXPIRES_IN
    });

export const verifyToken = (token, callback) => {
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return callback(err);
        }

        return callback(null, decoded);
    });
};

export const encryptPassword = (password, callback) => {
    var cbVoid = () => {};

    // Generate a salt then run callback
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return callback(err);
        }

        return bcrypt.hash(
            password,
            salt,
            (err: Error, encrypted: string): void => {
                if (err) return callback(err);

                return callback(null, encrypted);
            }
        );

        // Hash (encrypt) our password using the salt
        // return bcrypt.hash(password, salt, cbVoid, (err2, hash) => {
        //     if (err2) {
        //         return callback(err2);
        //     }
        //     return callback(null, hash);
        // });
    });
};

export const comparePassword = (currentPassword, candidatePassword, callback) =>
    bcrypt.compare(candidatePassword, currentPassword, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        return callback(null, isMatch);
    });
