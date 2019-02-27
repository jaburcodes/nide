import * as User from "./User/index";
import * as Device from "./Device/index";

export default {
    ...User.mutations,
    ...Device.mutations
};
