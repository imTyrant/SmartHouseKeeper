import * as React from 'react';
import Menu, { ClickParam } from 'antd/es/menu';
import 'antd/es/menu/style';
import './style/index.css';
import { DeviceSelector, IDeviceSelectorProps, DeviceSelectorWithStore } from '../DeviceSelector';
import { StatusTable, IStatusTableProps, StatusTableWithStore } from '../StatusTable';

const Item = Menu.Item;

export interface IControlPanelProps {
    deviceSelector?: IDeviceSelectorProps;
    statusTable?: IStatusTableProps;
    onModeChanged?: any;
}

export interface IControlPanelStates {
    currentWin: string;
}

enum wins {
    STATUS_TAB = "status-table",
    DEVICE_SELECTOR = "device-selector"
};

class ControlPanel extends React.Component<IControlPanelProps, IControlPanelStates> {
    constructor(props: IControlPanelProps) {
        super(props);
        this.state = {currentWin: wins.STATUS_TAB};
    }

    menuSelected(param: ClickParam) {
        this.props.onModeChanged!(param.key === wins.STATUS_TAB ? "STATUS":"CONFIG");
        this.setState({currentWin: param.key});
    }

    render() {
        let content;
        switch(this.state.currentWin) {
            case wins.DEVICE_SELECTOR:
                content = <DeviceSelectorWithStore {...this.props.deviceSelector!}/>
                break;
            case wins.STATUS_TAB:
            default:
                content = <StatusTableWithStore {...this.props.statusTable!}/>;
                break;
        }

        return (
            <div className="control-panel">
                <div className="panel-menu">
                    <Menu onClick={(p) => this.menuSelected(p)} selectedKeys={[this.state.currentWin]} mode="horizontal">
                        <Item key={wins.STATUS_TAB}>
                            Status
                        </Item>
                        <Item key={wins.DEVICE_SELECTOR}>
                            Selection
                        </Item>
                    </Menu>
                </div>
                <div className="panel-page">{content}</div>
            </div>
        );
    }
}

export default ControlPanel;