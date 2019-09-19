import { SystemTypes } from "../../types";

export type SystemMode = typeof SystemTypes.ControlMode;

export const MODE_CHANGE = "MODE_CHANGE";

export interface ModeChangeAction {
    type: typeof MODE_CHANGE;
    mode: SystemTypes.ControlMode;
}