import * as React from 'react';
import Collapse from 'antd/es/collapse';
import 'antd/es/collapse/style';
import "./style/index.css";
import { AddedDevicesList } from '../../store/config/types';
import { ConfigLoader } from '../../utils/config-loader';

const Panel = Collapse.Panel;

export interface StatusTablePanel {
    room: string;
    devices: Array<string>;
}

export interface IStatusTableProps {
    devicesList: AddedDevicesList;
};

export interface IStatusTableState {

};

class StatusTable extends React.Component<IStatusTableProps, IStatusTableState> {

    constructor(props: IStatusTableProps) {
        super(props);
    }

    makePanel(): React.ReactElement {
        let content: React.ReactElement[] = [];
        this.props.devicesList.detail.forEach((list, room) => {
            content.push(
                <Panel key={room} header={ConfigLoader.room(room)!.name}>
                    {
                        list.map((id) => {
                            const instance = this.props.devicesList.list.get(id)!;
                            const configInfo = ConfigLoader.device(instance.identifier)!;
                            return (
                                <React.Fragment key={id}>
                                    <span>{instance.id}</span>
                                    <span>{configInfo.name}</span>
                                    <span>{instance.status}</span>
                                    <br />
                                </React.Fragment>
                            )
                        })
                    }
                </Panel>);
        });
        return (<React.Fragment>{content}</React.Fragment>)
    }

    render() {
        const content = this.makePanel();
        return (
            <div className={"status-table"}>
                <Collapse bordered={false}>
                    {
                        content
                    }
                </Collapse>
            </div>
        );
    }
}

export default StatusTable;