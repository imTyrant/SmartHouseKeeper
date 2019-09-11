import * as React from 'react';
// import  from '../../node_modules/antd/es/popover'

import {Button, Popover, Switch, notification} from 'antd';
import 'antd/es/popover/style'
import 'antd/es/switch/style'
import 'antd/es/button/style'
import 'antd/es/notification/style'

export interface IPanelWithSwitchProps {
    onStatusChanged: (newStatus: boolean) => boolean;
    offStatus?: string;
    onStatus?: string;
    position: string;
    deviceName: string;
}

export interface IPanelWithSwitchStates {
    isActivated: boolean
}

export default class PanelWithSwitch extends React.Component<IPanelWithSwitchProps, IPanelWithSwitchStates> {
    constructor(props: IPanelWithSwitchProps) {
        super(props);
        this.state = {isActivated: false}
    }

    switchChangeHandler(checked: boolean, event: MouseEvent) {
        // const currentStatus = this.state.isActivated;
        
        if (this.props.onStatusChanged(checked)) {
            this.setState({isActivated: checked});
        } else {
            notification.open({
                message: "Not now!",
                description: "The magic value is no more than 50.",
                duration: 2
            });
        }
        
    }

    makePopoverContent() {
        return (
            <div>
                <Switch checked={this.state.isActivated} checkedChildren="开" unCheckedChildren="关" onChange={(c, e)=>{this.switchChangeHandler(c,e)}}/> 
            </div>
        );
    }

    render() {

        return (
            <div>
                <Popover autoAdjustOverflow={true} arrowPointAtCenter={true} content={this.makePopoverContent()} trigger="click" title={this.props.position}>
                    <Button>Device</Button>
                </Popover>
            </div>
        );
    }
}