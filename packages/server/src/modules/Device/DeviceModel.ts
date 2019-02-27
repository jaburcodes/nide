import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import Float from "mongoose-float";
const AutoIncrement = require("mongoose-sequence")(mongoose);

Float.loadType(mongoose);

const Schema = mongoose.Schema;

// ObjectID.prototype.valueOf = function() {
//     return this.toString();
// };

const DeviceSchema = new Schema(
    {
        _id: {
            type: Number
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
        },
        latitude: {
            type: Float
        },
        longitude: {
            type: Float
        },
        sensores: [
            {
                type: Schema.Types.ObjectId,
                ref: "Sensor"
            }
        ]
    },
    { _id: false }
);

DeviceSchema.plugin(AutoIncrement);

const DeviceModel = mongoose.model("Device", DeviceSchema);

export default DeviceModel;
