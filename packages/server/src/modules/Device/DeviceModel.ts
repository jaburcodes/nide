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

const DeviceModel = model("Device", schema);

export default DeviceModel;
