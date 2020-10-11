"use strict"

import { SystemTypes } from "./SystemTypes";

export namespace IPCChannel {
    export const RENDERER_DEVICE_ADD = "device-add-btn-clicked";
    export interface AddDeviceArgs {
        config: SystemTypes.DeviceConfigInfo;
    };

    export const RENDERER_DEVICE_REMOVE = "device-remove-btn-clicked";
    export interface RemoveDeviceArgs {

    };
 
    export const RENDERER_DEVICE_UPDATE = "device-status-updated";
    export interface UpdateDeviceArgs {

    };

    export const RENDERER_POSITION_CHANGED = "position-changed";

}
