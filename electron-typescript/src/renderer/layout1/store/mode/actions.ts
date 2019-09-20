import { ModeChangeAction, MODE_CHANGE, ControlMode } from "./types";

export function changeMode(mode: ControlMode): ModeChangeAction {
    return {
        type: MODE_CHANGE,
        mode
    }
}