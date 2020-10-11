import { AddedDevice, AddedDevicesList } from '../renderer/layout1/store/config/types';

export namespace SystemTypes {
    // App configuration
    export interface AppConfig {

    };

    // Redefine type of configuration in "./renderer/layout1/types.ts"
    // Dictionary structure should be changed later.
    export type DeviceConfigInfo = AddedDevice;
    export type DeviceConfigList = AddedDevicesList;
}