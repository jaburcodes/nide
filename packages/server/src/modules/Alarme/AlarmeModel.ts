import { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const schema = new Schema({
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

const AlarmeModel = model("Alarme", schema);

export default AlarmeModel;
