import * as React from 'react';
import DeviceSelector from './components/DeviceSelector';
import StatueTable from './components/StatusTable';
import ViewWindow from './components/ViewWindow';

import "./app.css"
import ControlPanel from './components/ControlPanel';

export interface IAppProps {

};

export interface IAppStates {

};

export default class App extends React.Component<IAppProps, IAppStates> {
    static defaultProps = {

    };

    constructor(props: IAppProps) {
        super(props)
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
    
        let house = ["room1","room2","room3","room4"]
        let roomDeviceMap = new Map<string, Array<string>>();
        roomDeviceMap.set("room1", ["d1", "d2", "d3", "d4", "d5"]);
        roomDeviceMap.set("room2", ["d1", "d2", "d3", "d4"]);
        roomDeviceMap.set("room3", ["d1", "d2", "d3"]);
        roomDeviceMap.set("room4", ["d1", "d2"]);

        return (
            <div>
                <ViewWindow
                    deviceList={[]}
                />
                <ControlPanel
                    deviceSelector = {{house, roomDeviceMap, onDeviceSelected: console.log}}
                    statusTable = {{panels: list}}
                />
            </div>
        );
    }
}