import { SystemTypes } from "../../types";

// export interface DeviceInfo {
//     id: string;
//     type: string;
//     room: string;
// }

// export interface DevicePosition {
//     coordX: number;
//     coordY: number;
// }

// export interface DeviceStatus {
//     status: string;
// }

// export interface HomeDeviceState {
//     action: "toggle" | "add" | "remove";
//     list: Array<DeviceInfo>;
//     position: Map<string, DeviceInfo>;
//     status: Map<string, DeviceStatus>
// }

// export const DEVICE_SELECT = "DEVICE_SELECTED";
// export const DEVICE_PLACE = "DEVICE_PLACED";
// export const DEVICE_REMOVE = "DEVICE_REMOVED";

// interface SelectDeviceAction {
//     type: typeof DEVICE_SELECT;
// }

// interface RemoveDeviceAction {
//     type: typeof DEVICE_REMOVE;
//     id: string
// }

export const MODE_CHANGE = "MODE_CHANGE";

export interface ModeChangeAction {
    type: typeof MODE_CHANGE;
    mode: SystemTypes.ControlMode;
}