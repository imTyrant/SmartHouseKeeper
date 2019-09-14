import * as React from 'react';
import Collapse from 'antd/es/collapse';
import 'antd/es/collapse/style'
// import * as styles from "./style/index.css";
import "./style/index.css"

const Panel = Collapse.Panel;

export interface StatueTablePanel {
    room: string;
    devices: Array<string>;
}

export interface IStatusTableProps {
    panels: Array<StatueTablePanel>;
};

export interface IStatusTableState {

};

export default class StatueTable extends React.Component<IStatusTableProps, IStatusTableState> {

    constructor(props: IStatusTableProps) {
        super(props)
    }

    render() {
        console.log(this.props.panels);
        return (
        <div className={"status-table"}>
            <Collapse defaultActiveKey={["1"]} bordered={false}>
                {
                    this.props.panels.map((value, index) => {
                        return (<Panel key={`${index}`} header={value.room} >
                            {
                                value.devices.map((value, index) => (<div key={`${index}`}><span>{value}</span><br/></div>))
                            }
                        </Panel>)
                    })
                }
            </Collapse>
        </div>
        );
    }
}