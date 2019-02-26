import { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const schema = new Schema(
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

const UserModel = model("User", schema);

export default UserModel;
