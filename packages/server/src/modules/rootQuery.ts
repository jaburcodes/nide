import * as User from "./user/index";
import * as Device from "./Device/index";
import * as Sensor from "./Sensor/index";

export default {
    ...User.queries,
    ...Device.queries
};
