import { AddedDevice } from '../renderer/layout1/store/config/types';

export namespace ConfigTypes {
    export type DeviceConfigInfo = AddedDevice;
    export interface DevicesList {
        roomIndex: Map<string, string[]>;
        dIdIndex: Map<string, DeviceConfigInfo>;
    };

    export interface AppConfigInfo {

    };
    export interface AppsList {
        
    };
}