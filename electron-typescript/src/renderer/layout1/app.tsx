import * as React from 'react';
// import * as path from 'path';
// import * as fs from 'fs';

import "./app.css";
import { ViewWindow, ViewWindowWithStore } from './components/ViewWindow';
import { ControlPanel, ControlPanelWithStore } from './components/ControlPanel';
import { ConfigTypes } from './types';
import deviceInfo from './config/devices';
import roomInfo from './config/rooms';


export interface IAppProps {

};

export interface IAppStates {

};

export default class App extends React.Component<IAppProps, IAppStates> {
    static defaultProps = {

    };

    private houseConfig: ConfigTypes.HouseDetail;

    constructor(props: IAppProps) {
        super(props);
        this.houseConfig = {deviceList: deviceInfo, roomList: roomInfo};
    }
    
    render() {
        let list = [
            {
                room: "room1",
                devices: ["d1", "d2", "d3"]
            },
            {
                room: "room2",
                devices: ["d1", "d2"]
            },
            {
                room: "room3",
                devices: ["d1", "d2", "d1", "d2"]
            },
            {
                room: "room4",
                devices: ["d1", "d2", "d1", "d2"]
            },
            {
                room: "room5",
                devices: ["d1", "d2", "d1", "d2"]
            }
        ]
        
        let house = this.houseConfig.roomList.map((value: ConfigTypes.RoomDetail) => value.name);
        let roomDeviceMap = new Map<string, Array<string>>();
        roomDeviceMap.set("all", this.houseConfig.deviceList.map((value: ConfigTypes.DeviceDetail) => value.name));

        return (
            <div>
                <ViewWindowWithStore/>
                <ControlPanelWithStore
                    deviceSelector = {{rooms: roomInfo, availableDevices: deviceInfo, onDeviceSelected: console.log}}
                />
            </div>
        );
    }
}