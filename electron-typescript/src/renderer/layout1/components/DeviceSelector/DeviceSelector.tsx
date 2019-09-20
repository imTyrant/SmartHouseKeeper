import * as React from 'react';
import "./style/index.css";

import Select from "antd/es/select";
import "antd/es/select/style";
import List from "antd/es/list";
import "antd/es/list/style";
import Button from "antd/es/button";
import "antd/es/button/style";

import Icon from 'antd/es/icon';
import MouseTracker, { PlacementDetail } from '../MouseTracker/MouseTracker';
import { Locale } from '../../locale';
import { RendererTypes } from '../../types';
import { ConfigLoader } from '../../utils/config-loader';

const Option = Select.Option;

export interface Selection {
    action: string;
    room: string;
    device: string;
    x: number;
    y: number;
    detail: RendererTypes.DeviceDetail;
}

export interface IDeviceSelectorProps {
    rooms: RendererTypes.RoomDetail[];
    availableDevices: RendererTypes.DeviceDetail[];
    onDeviceSelected: (selection: Selection) => void;
    roomDeviceMap?: Map<string, string>;
}

export interface IDeviceSelectorStates {
    roomSelection: number;
    add: boolean;
}

class DeviceSelector extends React.Component<IDeviceSelectorProps, IDeviceSelectorStates> {
    static defaultProps = {
    }

    private roomList: string[];
    private MTContent: React.ReactElement;
    private selection: Selection;

    constructor(props: IDeviceSelectorProps) {
        super(props);
        this.state = {roomSelection: 0, add: false};
        this.roomList = ["All"];
        this.MTContent = {} as React.ReactElement;
        this.selection = {x: 0, y: 0, action: "", device: "", room: "", detail: ({} as RendererTypes.DeviceDetail)};
    }

    onSelectorPicked(value: string) {
        this.setState({roomSelection: +value}); // use + for string -> number
    }

    onSelectionButtonClicked(action: string, index: number | string) {
        this.selection.action = action;
        const device = this.props.availableDevices[index as number];
        this.selection.device = device.identifier;
        this.selection.detail = device;
        
        switch (this.selection.action) {
            case "add":
                this.setState({add: true});
                this.MTContent = (<img style={{width:"100%", height:"100%"}} src={ConfigLoader.loadImage(device.icon, "path") as string}/>);
                break;
            case "remove":
                break;
            default:
                throw new Error(Locale.DEVICE_SELECTOR_WRONG_BUTTON_CLICKED);
        }
    }

    handleDevicePositionDecided(info: PlacementDetail) {
        this.setState({add:false});
        if (info.room === "") { return; }
        this.props.onDeviceSelected({...this.selection, x: info.x, y: info.y, room: info.room}); // Return the selection to the parent.
    }

    render() {
        const mouseTrackerComponent = this.state.add ? (<MouseTracker onPositionChosen={this.handleDevicePositionDecided.bind(this)}>{this.MTContent}</MouseTracker>) : null;

        return (
            <div className={"device-selector"}>
                <Select
                    className="room-list"
                    placeholder={this.roomList[this.state.roomSelection]}
                    onSelect={(v) => {this.onSelectorPicked(v as string)}}
                >
                {
                    this.roomList.map((value, index) => (<Option key={`${value}`} value={`${index}`}>{value}</Option>))
                }
                </Select>
                <div className={"device-list"}>
                    <List
                        size="small"
                        dataSource={this.props.availableDevices}
                        renderItem={(item, index) => (
                            <List.Item key={`${index}`}
                                actions={[
                                    <Button key={`${item.identifier}-add`} type="link" size="small" 
                                        onClick={(e) => {this.onSelectionButtonClicked("add", index)}}
                                    >
                                        <Icon type="plus" style={{ fontSize:'15px', color:'#87d068'}}/>
                                    </Button>
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<img style={{width:"20px", height:"20px"}} src={ConfigLoader.loadImage(item.icon, "path") as string} />} // NOT WORK!!
                                    title={item.name}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                    {mouseTrackerComponent /* Here mount the MouseTracker component, but it will be added in to DOM root. */} 
                </div>
            </div>
        );
    }
}

export default DeviceSelector;