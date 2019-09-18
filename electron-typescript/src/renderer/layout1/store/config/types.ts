export const ADD_DEVICE = "ADD_DEVICE";
export const REMOVE_DEVICE = "REMOVE_DEVICE";

export interface Coords {
    x: number;
    y: number;
}

export interface AddedDevice {
    id: string;
    room: string;
    identifier: string;
    coords: Coords;
}

export interface AddedDevicesList {
    list: Map<string, AddedDevice>; // map an unique id to device
    detail: Map<string, string[]>; // map room identifier to the list of devices installed in it
}

interface AddDeviceAction {
    type: typeof ADD_DEVICE;
    config: AddedDevice;
}

interface RemoveDeviceAction {
    type: typeof REMOVE_DEVICE;
    id: string;
}

export type DeviceConfigAction = AddDeviceAction | RemoveDeviceAction;