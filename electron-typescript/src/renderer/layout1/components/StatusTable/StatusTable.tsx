import * as React from 'react';
import Collapse from 'antd/es/collapse';
import 'antd/es/collapse/style'
import "./style/index.css"

const Panel = Collapse.Panel;

export interface StatusTablePanel {
    room: string;
    devices: Array<string>;
}

export interface IStatusTableProps {
    panels: Array<StatusTablePanel>;
};

export interface IStatusTableState {

};

class StatusTable extends React.Component<IStatusTableProps, IStatusTableState> {

    constructor(props: IStatusTableProps) {
        super(props);
    }

    render() {
        return (
        <div className={"status-table"}>
            <Collapse defaultActiveKey={["1"]} bordered={false}>
                {
                    this.props.panels.map((value, index) => {
                        return (<Panel key={`${index}`} header={value.room} >
                            {
                                value.devices.map((value, index) => (<React.Fragment key={`${index}`}><span>{value}</span><br/></React.Fragment>))
                            }
                        </Panel>)
                    })
                }
            </Collapse>
        </div>
        );
    }
}

export default StatusTable;