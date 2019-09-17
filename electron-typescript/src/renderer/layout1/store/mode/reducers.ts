import { SystemTypes } from "../../types";
import { ModeChangeAction, MODE_CHANGE } from "./types";


const initialState = SystemTypes.ControlMode.STATUS;

export function modeReducer(state = initialState, action: ModeChangeAction): SystemTypes.ControlMode {
    switch (action.type) {
        case MODE_CHANGE:
            return action.mode;
        default:
            return state;
    }
}