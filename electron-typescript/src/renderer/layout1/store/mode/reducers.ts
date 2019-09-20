import { ModeChangeAction, MODE_CHANGE, ControlMode } from "./types";


const initialState =  ControlMode.STATUS;

export function modeReducer(state = initialState, action: ModeChangeAction): ControlMode {
    switch (action.type) {
        case MODE_CHANGE:
            return action.mode;
        default:
            return state;
    }
}