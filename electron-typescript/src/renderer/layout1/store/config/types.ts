import { RendererTypes } from "../../types";
import { Selection } from "../../components/DeviceSelector";

export const ADD_DEVICE = "ADD_DEVICE";
export type ADD_DEVICE = typeof ADD_DEVICE;
export const REMOVE_DEVICE = "REMOVE_DEVICE";
export type REMOVE_DEVICE = typeof REMOVE_DEVICE;
export const UPDATE_DEVICE = "UPDATE_DEVICE";
export type UPDATE_DEVICE = typeof UPDATE_DEVICE;

export interface Coords {
    x: number;
    y: number;
}

export interface AddedDevice {
    id: string;
    identifier: string;
    room: string;
    coords: Coords;
    status: number;
    detail: RendererTypes.DeviceDetail;
}

export interface AddedDevicesList {
    list: Map<string, AddedDevice>; // map an unique id to device
    detail: Map<string, string[]>; // map room identifier to the list of devices installed in it
}

export interface UpdatingParam {
    id: string;
    status: number;
}

interface AddDeviceAction {
    type: ADD_DEVICE;
    config: Selection;
}

interface RemoveDeviceAction {
    type: REMOVE_DEVICE;
    id: string;
}

interface UpdateDeviceAction {
    type: UPDATE_DEVICE;
    param: UpdatingParam;
}

export type DeviceConfigAction = AddDeviceAction | RemoveDeviceAction | UpdateDeviceAction;