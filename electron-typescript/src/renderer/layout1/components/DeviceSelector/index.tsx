import * as React from 'react';
import * as InfiniteScroll from "react-infinite-scroller";

import Select from "antd/es/select";
import "antd/es/select/style";
// import Card from "antd/es/card";
// import "antd/es/card/style";
import List from "antd/es/list";
import "antd/es/list/style";
import Button from "antd/es/button";
import "antd/es/button/style";

import "./style/index.css";
import Icon from 'antd/es/icon';

const Option = Select.Option;

export interface Selection {
    action: string;
    room: string;
    device: string;
}

export interface IDeviceSelectorProps {
    house: Array<string>;
    roomDeviceMap: Map<string, Array<string>>;
    onDeviceSelected: (selection: Selection) => void;
}

export interface IDeviceSelectorStates {
    roomSelection: number;
}

export default class DeviceSelector extends React.Component<IDeviceSelectorProps, IDeviceSelectorStates> {
    static defaultProps = {
        roomList: ["Empty"]
    }

    private roomList: Array<string>;

    constructor(props: IDeviceSelectorProps) {
        super(props);
        this.state = {roomSelection: 0};
        this.roomList = this.props.house;
    }

    onRoomSelected(value: string) {
        this.setState({roomSelection: +value}); // use + for string -> number
    }

    onSelectionButtonClicked(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        let resultArray = event.currentTarget.id.split("-");
        let action = resultArray[-1];
        let device = resultArray.splice(0,-1).join("-");

        switch (action) {
            case "add":
                break;
            case "remove":
                break;
            default:
                throw new Error("Invalid btn clicked");
        }

        let selection: Selection = {
            action,
            room: this.roomList[this.state.roomSelection],
            device: event.currentTarget.id.split("-").splice(0,-1).join("-")
        };
        this.props.onDeviceSelected(selection); // Return the selection to the parent.
    }

    render() {
        return (
            <div className={"device-selector"}>
                <Select
                    className="room-list"
                    placeholder={this.roomList[this.state.roomSelection]}
                    onSelect={(v) => {this.onRoomSelected(v as string)}}
                >
                {
                    this.roomList.map((value, index) => (<Option key={`${value}`} value={`${index}`}>{value}</Option>))
                }
                </Select>
                <div className={"device-list"}>
                    <List
                        size="small"
                        dataSource={this.props.roomDeviceMap.get(this.roomList[this.state.roomSelection])}
                        renderItem={(item, index) => (
                            <List.Item key={`${index}`} >
                                <List.Item.Meta
                                    title={item}
                                    description={item}
                                />
                                    <Button id={`${item}-add`} key={`${item}-add`} type="link" size="small" onClick={(e) => this.onSelectionButtonClicked(e)}>
                                        <Icon type="plus" style={{ fontSize:'15px', color:'green'}}/>
                                    </Button>
                                    <Button id={`${item}-remove`} key={`${item}-remove`} type="link" size="small" onClick={(e) => this.onSelectionButtonClicked(e)}>
                                        <Icon type="minus" style={{ fontSize:'15px', color:'red'}}/>
                                    </Button>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}