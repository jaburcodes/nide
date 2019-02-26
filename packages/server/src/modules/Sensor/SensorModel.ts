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
    dataSourceId: {
        type: Schema.Types.ObjectId,
        ref: "Device"
    }
});

const SensorModel = model("Sensor", schema);

export default SensorModel;
