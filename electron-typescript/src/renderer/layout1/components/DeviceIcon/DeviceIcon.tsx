import * as React from 'react';
import "./style/index.css";
import Button from 'antd/es/button';
import 'antd/es/button/style'
import Popover from 'antd/es/popover';
import 'antd/es/popover/style'
import Switch from 'antd/es/switch';
import 'antd/es/switch/style'
import notification from 'antd/es/notification';
import 'antd/es/notification/style'
import Icon from 'antd/es/icon';
import 'antd/es/radio/style'
import Typography from 'antd/es/typography';
import 'antd/es/typography/style';
import Radio from 'antd/es/radio';
import { RadioChangeEvent } from 'antd/lib/radio';
import { ConfigLoader } from '../../utils/config-loader';
import { ConfigTypes } from '../../types';
import { Locale } from '../../locale';
import { AddedDevice } from '../../store/config/types';

const { Title, Text } = Typography;

export interface IStatusChangedEvent {
    deviceName: string;
    position: string;
    nextStatus: number;
    currentStatus: number;
}

export interface IDeviceIconProps {
    info: AddedDevice;
    onStatusChangeListener: (id: string, nextStatus: number) => void;
}

export interface IDeviceIconStates {
}

class DeviceIcon extends React.Component<IDeviceIconProps, IDeviceIconStates> {

    private deviceInfo: ConfigTypes.DeviceDetail;

    constructor(props: IDeviceIconProps) {
        super(props);
        this.deviceInfo = ConfigLoader.device(this.props.info.identifier)!;
        console.log("DI", "dommme!");
    }

    makePopoverContent() {
        console.log("DI", this.props.info);
        let content: React.ReactElement;
        if (this.deviceInfo.statuses.length === 2) {
            content = (
                <Switch
                    checked={this.props.info.status !== 0} unCheckedChildren={this.deviceInfo.statuses[this.props.info.status]}
                    checkedChildren={this.deviceInfo.statuses[this.props.info.status]}
                    onChange={(c, e) => { this.props.onStatusChangeListener(this.props.info.id, c ? 1 : 0) }}
                />
            );
        } else {
            content = (
                <Radio.Group
                    value={this.props.info.status} size="small" buttonStyle="outline"
                    onChange={(e) => { this.props.onStatusChangeListener(this.props.info.id, e.target.value) }}
                >
                    {
                        this.deviceInfo.statuses.map((value, index) => <Radio.Button key={`${this.props}_${index}`} value={index}>{value}</Radio.Button>)
                    }
                </Radio.Group>
            );
        }
        return (
            <div className="popover-container">{content}</div>
        );
    }

    render() {
        return (
            <div className="device-icon">
                <Popover
                    autoAdjustOverflow={true} arrowPointAtCenter={true}
                    title={
                        <React.Fragment>
                            <Text strong >{this.deviceInfo.name}</Text> <br />
                            <Text type="secondary" >{this.props.info.id}</Text>
                        </React.Fragment>
                    }
                    content={this.makePopoverContent()} trigger="click"
                >
                    {
                        <img src={ConfigLoader.loadImage(this.deviceInfo.icon, "path") as string} />
                    }
                </Popover>
            </div>
        );
    }
}

export default DeviceIcon;