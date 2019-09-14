import * as React from 'react';
import DeviceSelector from './components/DeviceSelector';
import StatueTable from './components/StatusTable';

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
                <div style={{width: "500px"}}>
                    <DeviceSelector
                        house={house}
                        roomDeviceMap={roomDeviceMap}
                        onDeviceSelected={console.log}
                    />
                </div>
                <div style={{position:"absolute", width: "200px", height: "100px"}}>
                    <StatueTable
                        panels={list}
                    />
                </div>
            </div>
        );
    }
}