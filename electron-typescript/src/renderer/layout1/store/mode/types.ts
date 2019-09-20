export enum ControlMode {
    CONFIG = "CONFIG",
    STATUS = "STATUS"
}

export const MODE_CHANGE = "MODE_CHANGE";

export interface ModeChangeAction {
    type: typeof MODE_CHANGE;
    mode: ControlMode;
}