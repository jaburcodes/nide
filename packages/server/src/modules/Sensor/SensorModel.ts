import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import { number } from "prop-types";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const SensorSchema = new Schema({
    xid: {
        type: String,
        required: true
    },
    pointValue: {
        type: Number
    },
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
    alarmes: {
        type: Schema.Types.ObjectId,
        ref: "Alarme"
    }
});

const SensorModel = mongoose.model("Sensor", SensorSchema);

export default SensorModel;
