export namespace RendererTypes{
    export interface RoomDetail {
        identifier: string;
        name: string;
    }

    export interface DeviceDetail {
        identifier: string;
        name: string;
        type: string;
        description: string;
        icon: string;
        statuses: string[];
    }

    export interface HouseDetail {
        deviceList: Array<DeviceDetail>;
        roomList: Array<RoomDetail>;
        roomDeviceMap?: Map<string, string>;
    }
}