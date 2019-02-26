import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const DeviceSchema = new Schema({
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
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    sensores: [
        {
            type: Schema.Types.ObjectId,
            ref: "Sensor"
        }
    ]
});

const DeviceModel = mongoose.model("Device", DeviceSchema);

export default DeviceModel;
