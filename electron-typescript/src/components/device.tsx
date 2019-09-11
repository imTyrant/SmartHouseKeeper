import * as React from 'react';

export interface DeviceProps {
    status: number;
    deviceID: string;
}

export default class Device extends React.Component<DeviceProps>{
    constructor(props: DeviceProps) {
        super(props);
    }

    onClickHandler(event: React.MouseEvent) {
        
    }

    render() {
        return (
            <div className={".clickable-device-img"}>
                <button onClick={this.onClickHandler}>Device</button>
            </div>
        );
    }
}