"use strict"
import * as path from 'path';
import * as crypto from 'crypto';
import AppSimulator from './AppSimulator';
import HouseDetail from '../config/house-detail';
import { IPCChannel } from '../types/ipc-channel';
import Queue from '../utils/queue';
import { IRendererEventHandler, RendererEventHandler } from './RendererEventHandler';


export default class SmartHouse implements IRendererEventHandler {
    private installedApps: any;
    private addedDevices: any;
    private deviceList: any;
    private roomList: any;

    private rendererEventHandler: RendererEventHandler;

    constructor(config: any) {
        this.onAddDevice.bind(this);
        this.onRemoveDevice.bind(this);
        this.onUpdateDevice.bind(this);

        this.addedDevices = new Map();
        this.installedApps = new Map();

        if (config === null) {

        } else {
            // parse config;
        }

        this.rendererEventHandler = new RendererEventHandler(this);
    }   


    public onAddDevice(args: IPCChannel.AddDeviceArgs): void {
        // Based on the args update the [this.addedDevices]
        console.log(args);
    }

    public onUpdateDevice(args: IPCChannel.UpdateDeviceArgs): void {

    }

    public onRemoveDevice(args: IPCChannel.RemoveDeviceArgs): void {
        
    }
}