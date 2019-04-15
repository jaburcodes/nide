import * as User from "./User/index";
import * as Device from "./Device/index";
import * as Sensor from "./Sensor/index";
import * as Alarme from "./Alarme/index";

export default {
    ...User.queries,
    ...Device.queries,
    ...Sensor.queries,
    ...Alarme.queries
};
