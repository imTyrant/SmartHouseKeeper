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