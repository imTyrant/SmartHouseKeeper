import * as React from "react";
import { ipcRenderer } from "electron";
import Channel from "../../types/ipc-channel";

let selectedRoom;

function out(event: MouseEvent): void {
    const deviceType = (<HTMLInputElement>event.target).id;
    ipcRenderer.send(Channel.RENDERER_DEVICE_ADD, {selectedRoom, deviceType})
}

function dis(event: MouseEvent): void {
    const deviceType = (<HTMLInputElement>event.target).id;
    ipcRenderer.send(Channel.RENDERER_DEVICE_REMOVE, {selectedRoom, deviceType});
}

// function statusUpdate()