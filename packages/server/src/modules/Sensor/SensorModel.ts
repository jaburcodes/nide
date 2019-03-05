import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const SensorSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    xid: {
        type: String,
        required: true
    },
    pointValue: [Number],
    date: {
        type: String
    },
    dataType: {
        type: Number
    },
    dataSourceId: {
        type: Number,
        ref: "Device"
    },
    alarme: {
        type: Schema.Types.ObjectId,
        ref: "Alarme"
    }
});

const SensorModel = mongoose.model("Sensor", SensorSchema);

export default SensorModel;
