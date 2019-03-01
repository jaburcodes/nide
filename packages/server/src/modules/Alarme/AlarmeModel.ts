import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const AlarmeSchema = new Schema({
    sensor: {
        type: Schema.Types.ObjectId,
        ref: "Sensor"
    },
    aceitavel: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    emergencial: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    perigoso: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    }
});

const AlarmeModel = mongoose.model("Alarme", AlarmeSchema);

export default AlarmeModel;
