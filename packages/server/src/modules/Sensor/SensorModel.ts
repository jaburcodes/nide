import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const SensorSchema = new Schema({
    xid: {
        type: String,
        required: true
    },
    dataSourceId: {
        type: Schema.Types.ObjectId,
        ref: "Device"
    },
    alarme: {
        type: Schema.Types.ObjectId,
        ref: "Alarme"
    }
});

const SensorModel = mongoose.model("Sensor", SensorSchema);

export default SensorModel;
