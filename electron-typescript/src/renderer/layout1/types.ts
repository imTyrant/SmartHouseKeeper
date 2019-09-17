export namespace ConfigTypes{
    export interface RoomDetail {
        name: string;
    }

    export interface DeviceDetail {
        name: string;
        description: string;
        icon: string;
        states: Array<string>;
    }

    export interface HouseDetail {
        deviceDetail: Array<DeviceDetail>;
        roomList: Array<RoomDetail>;
    }
}

export namespace SystemTypes{

    export enum ControlMode {
        CONFIG = "CONFIG",
        STATUS = "STATUS"
    }
}