"use strict"
import { IPCChannel } from '../types/IPCChannel';
import Queue from '../utils/queue';
import { IRendererEventHandler, RendererConnector } from './RendererConnector';
import { ConfigTypes } from '../types/ConfigTypes';

export default class SmartHouse implements IRendererEventHandler {
    private installedApps: any;
    private deviceConfig: ConfigTypes.DevicesList;
    
    private rendererConnector: RendererConnector;

    constructor(config: any) {
        this.onAddDevice.bind(this);
        this.onRemoveDevice.bind(this);
        this.onUpdateDevice.bind(this);

        this.deviceConfig = { 
            roomIndex: new Map<string, string[]>(),
            dIdIndex: new Map<string, ConfigTypes.DeviceConfigInfo>(),
        };
        this.installedApps = new Map();

        if (config === null) {

        } else {
            // parse config;
        }

        this.rendererConnector = new RendererConnector(this);
    }


    public onAddDevice(args: IPCChannel.AddDeviceArgs): void {
        // Based on the args update [this.deviceConfig]
    }

    public onUpdateDevice(args: IPCChannel.UpdateDeviceArgs): void {
        
    }

    public onRemoveDevice(args: IPCChannel.RemoveDeviceArgs): void {
        
    }
}