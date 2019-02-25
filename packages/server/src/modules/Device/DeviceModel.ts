import { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    xid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dataSourceType: {
        type: Number,
        required: true
    }
});

const DeviceModel = model("Device", schema);

export default DeviceModel;
