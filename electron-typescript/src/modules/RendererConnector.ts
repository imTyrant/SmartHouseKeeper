"use strict"

import { ipcMain, IpcMainEvent } from "electron";
import { IPCChannel } from "../types/IPCChannel";

export interface IRendererEventHandler {
    onAddDevice: (args: IPCChannel.AddDeviceArgs) => void;
    onRemoveDevice: (args: IPCChannel.RemoveDeviceArgs) => void;
    onUpdateDevice: (args: IPCChannel.UpdateDeviceArgs) => void;
}

export class RendererConnector {
    private handler: IRendererEventHandler;

    constructor(handler: IRendererEventHandler) {
        this.handler = handler;
        this.registerListener();
    }

    private registerListener(): void {
        ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, (e: IpcMainEvent, args: IPCChannel.AddDeviceArgs) => {
            this.handler.onAddDevice(args);
        });
        ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, (e: IpcMainEvent, args: any[]) => {
            this.handler.onRemoveDevice(args);
        });
        ipcMain.on(IPCChannel.RENDERER_DEVICE_UPDATE, (e: IpcMainEvent, args: any[]) => {
            this.handler.onUpdateDevice(args);
        });
    }
}
