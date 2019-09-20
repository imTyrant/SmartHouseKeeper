import * as React from 'react';
import Menu, { ClickParam } from 'antd/es/menu';
import 'antd/es/menu/style';
import './style/index.css';
import { DeviceSelector, IDeviceSelectorProps, DeviceSelectorWithStore } from '../DeviceSelector';
import { StatusTable, IStatusTableProps, StatusTableWithStore } from '../StatusTable';
import { Locale } from '../../locale';
import { ControlMode } from '../../store/mode/types';

const Item = Menu.Item;

export interface IControlPanelProps {
    deviceSelector?: IDeviceSelectorProps;
    statusTable?: IStatusTableProps;
    onModeChanged: (mode: ControlMode) => void;
}

export interface IControlPanelStates {
    currentWin: ControlMode;
}

class ControlPanel extends React.Component<IControlPanelProps, IControlPanelStates> {
    constructor(props: IControlPanelProps) {
        super(props);
        this.state = {currentWin: ControlMode.STATUS};
    }

    menuSelected(param: ClickParam) {
        this.props.onModeChanged!(param.key === ControlMode.STATUS? ControlMode.STATUS : ControlMode.CONFIG );
        this.setState({currentWin: param.key === ControlMode.STATUS? ControlMode.STATUS : ControlMode.CONFIG });
    }

    render() {
        let content;
        switch(this.state.currentWin) {
            case ControlMode.CONFIG:
                content = <DeviceSelectorWithStore {...this.props.deviceSelector!}/>
                break;
            case ControlMode.STATUS:
            default:
                content = <StatusTableWithStore {...this.props.statusTable!}/>;
                break;
        }

        return (
            <div className="control-panel">
                <div className="panel-menu">
                    <Menu onClick={(p) => this.menuSelected(p)} selectedKeys={[this.state.currentWin]} mode="horizontal">
                        <Item key={ControlMode.STATUS}>
                            {Locale.CONTROL_PANEL_STATUS}
                        </Item>
                        <Item key={ControlMode.CONFIG}>
                            {Locale.CONTROL_PANEL_CONFIG}
                        </Item>
                    </Menu>
                </div>
                <div className="panel-page">{content}</div>
            </div>
        );
    }
}

export default ControlPanel;