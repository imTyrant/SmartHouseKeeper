import { ipcMain } from 'electron';
import { IPCChannel } from '../types/ipc-channel';

export class FrontendConnector {
    constructor() {

    }

    listen() {
        // ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, (event, args) => this.onAddDevice(event, args));
        // ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, (event, args) => this.onRemoveDevice(event, args));
        // ipcMain.on(IPCChannel.RENDERER_POSITION_CHANGED, (event, args) => this.onPositionChanged(event, args));
    }

    send() {

    }
}