import { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const schema = new Schema({
    xid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    dataSourceType: {
        type: Number,
        required: true
    }
});

const DeviceModel = model("Device", schema);

export default DeviceModel;
