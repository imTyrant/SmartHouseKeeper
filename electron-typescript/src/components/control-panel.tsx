import * as React from 'react';

import Button from 'antd/es/button';
import Popover from 'antd/es/popover';
import Switch from 'antd/es/switch';
import notification from 'antd/es/notification';
import Icon from 'antd/es/icon';
import Radio from 'antd/es/radio';

import 'antd/es/popover/style'
import 'antd/es/switch/style'
import 'antd/es/button/style'
import 'antd/es/notification/style'
import 'antd/es/radio/style'
import { RadioChangeEvent } from 'antd/lib/radio';

export interface IStatusChangedEvent {
    deviceName: string;
    position: string;
    nextStatus: number;
    currentStatus: number;
}

export interface IControlPanelProps {
    icon: string;
    deviceName?: string;
    position?: string;
    statusList?: Array<string>;
    onStatusChanged?: (event: IStatusChangedEvent) => boolean;
}

export interface IControlPanelStates {
    currentStatus: number;
}

export default class ControlPanel extends React.Component<IControlPanelProps, IControlPanelStates> {
    static defaultProps = {
        icon: "",
        deviceName: "",
        position: "",
        statusList: ["On", "Off"],
        onStatusChanged: (e: IStatusChangedEvent) => true,
    };

    constructor(props: IControlPanelProps) {
        super(props);
        this.state = {currentStatus: 0};
    }

    parseCurrentState(): string | boolean {
        if (this.props.statusList!.length === 2) {
            return this.state.currentStatus === 0 ? false : true;
        } else {
            return `${this.state.currentStatus}`;
        }
    }

    switchChangedHandler(checked: boolean, event: MouseEvent): void {
        const e: IStatusChangedEvent = {
            deviceName: this.props.deviceName!,
            position: this.props.position!,
            nextStatus: checked ? 1 : 0,
            currentStatus: this.state.currentStatus
        }

        if (this.props.onStatusChanged!((e))) {
            this.setState({currentStatus: checked ? 1 : 0});
        } else {
            notification.open({
                message: "Not now!",
                description: "Cannot change device status.",
                duration: 2
            });
        }        
    }

    radioChangedHandler(event: RadioChangeEvent): void {
        const e: IStatusChangedEvent = {
            deviceName: this.props.deviceName!,
            position: this.props.position!,
            nextStatus: event.target.value,
            currentStatus: this.state.currentStatus
        }
        console.log(event);
        if (this.props.onStatusChanged!(e)) {
            this.setState({currentStatus: e.nextStatus});
        } else {
            notification.open({
                message: "Not now!",
                description: "Cannot change device status.",
                duration: 2
            });
        }
    }

    makePopoverContent() {
        let content;
        if (this.props.statusList!.length === 2) {
            content =  (<Switch checked={this.parseCurrentState() as boolean} unCheckedChildren={this.props.statusList![0]}
                    checkedChildren = {this.props.statusList![1]} onChange={(c, e) => {this.switchChangedHandler(c, e)}}/>);
        } else {
            content = (<Radio.Group value={this.parseCurrentState() as string} size="small" buttonStyle="outline"
                    onChange={(e) => {this.radioChangedHandler(e)}}>
                    {
                        this.props.statusList!.map((value, index) => <Radio.Button key={`${index}`} value={`${index}`}> {value}</Radio.Button>)
                    }
                    </Radio.Group>
            )
        }
        return (
            <div>{content}</div>
        );
    }

    render() {
        return (
            <div>
                <Popover autoAdjustOverflow={true} arrowPointAtCenter={true} content={this.makePopoverContent()}
                    trigger="click" title={`${this.props.position}:${this.props.deviceName}`}>
                       {
                           this.props.icon === "" ? <Button size="small"><Icon type="deployment-unit" /></Button> : 
                            <img src={`${this.props.icon}`} style={{width:"40px", height:"40px"}}></img>
                        }
                </Popover>
            </div>
        );
    }
}