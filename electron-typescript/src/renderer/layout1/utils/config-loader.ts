import * as React from 'react';
import * as path from 'path';
import Devices from '../config/devices';
import Rooms from '../config/rooms';
import { ConfigTypes } from '../types';

const IMG_PATH = "./img/";

class ConfigLoaderClass {
    private DevicesMap: Map<string, ConfigTypes.DeviceDetail>;
    private RoomsMap: Map<string, ConfigTypes.RoomDetail>;

    constructor() {
        this.DevicesMap = new Map();
        this.RoomsMap = new Map();
        this.init();
    }

    private init() {
        for(let each of Devices) {
            this.DevicesMap.set(each.identifier, each);
        }
        for(let each of Rooms) {
            this.RoomsMap.set(each.identifier, each);
        }
    }

    /**
     * 
     * @param img [string] The img name wanted to load.
     * @param type ["path" | "icon" | "avatar"] Identify output type. Default is "path".
     */
    public loadImage(img: string, type: "path" | "icon" | "avatar" = "path"): string | React.ReactElement | undefined{
        const thePath: string = path.join(IMG_PATH, img);
        switch(type) {
            case "path":
                return thePath;
            case "icon":
                return React.createElement("img");
            case "avatar":
                return React.createElement("img");
            default:
                throw new Error("Invalid output type.");
        }
    }

    public deviceImage(identifier: string, type: "path" | "icon" | "avatar" = "path"): string | React.ReactElement | undefined {
        if (this.DevicesMap.has(identifier)) {
            return this.loadImage(this.DevicesMap.get(identifier)!.icon, type);
        }
        return undefined;
    }

    public device(identifier: string): ConfigTypes.DeviceDetail | undefined {
        if (this.DevicesMap.has(identifier)) {
            return this.DevicesMap.get(identifier)!;
        }
        return undefined;
    }

    public room(identifier: string): ConfigTypes.RoomDetail | undefined {
        if (this.RoomsMap.has(identifier)) {
            return this.RoomsMap.get(identifier)!;
        }
        return undefined;
    }
}

export const ConfigLoader = new ConfigLoaderClass();