import { ModeChangeAction, MODE_CHANGE } from "./types";
import { SystemTypes } from "../../types";

export function changeMode(mode: SystemTypes.ControlMode): ModeChangeAction {
    return {
        type: MODE_CHANGE,
        mode
    }
}