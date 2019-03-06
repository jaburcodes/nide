import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            hidden: true
        },
        email: {
            type: String,
            required: false,
            index: true
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt"
        },
        collection: "user"
    }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
