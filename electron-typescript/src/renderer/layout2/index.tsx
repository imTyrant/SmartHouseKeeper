import * as ReactDOM from 'react-dom';
import * as React from 'react';
import ControlPanel, { IStatusChangedEvent } from '../../components/control-panel';
import StatusTable from "../layout1/components/StatusTable";
import DeviceSelector from '../layout1/components/DeviceSelector';

function createDivWithText() {
    let elDiv = document.createElement("div");
    let elP = document.createElement("p");
    elP.innerHTML = "This from TypeScript!";
    elDiv.appendChild(elP);
    document.querySelector('body')!.appendChild(elDiv);
}

function parseStatusChange(event: IStatusChangedEvent): boolean {
    if (Math.floor(Math.random() * 100) > 50) {
        return true;
    }
    return false;
}

$(document).ready(() => {
    console.log("loaded!");
    createDivWithText();
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
    
    let func = (d: any) => {
        console.log(d);
    }

    ReactDOM.render(
        (
            <div>
                <ControlPanel statusList={["a", "b", "c"]} onStatusChanged={parseStatusChange} position="bedroom" deviceName="bulb"/>
                <DeviceSelector 
                    house={house}
                    roomDeviceMap={roomDeviceMap}
                    onDeviceSelected={func}
                />
            </div>
        ),
        document.querySelector('#hello-container') as HTMLElement
    );
});