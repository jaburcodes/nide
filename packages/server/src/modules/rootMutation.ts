import * as User from "./User/index";
import * as Device from "./Device/index";
import * as Alarme from "./Alarme/index";

export default {
    ...User.mutations,
    ...Device.mutations
};
