import React from 'react';

export interface StatueTablePanel {
    room: string;
    devices: Array<string> | [];
}

export interface IStatusTableProps {
    panels: Array<StatueTablePanel>;
};

export interface IStatusTableState {

};

export default class StatueTable extends React.Component<IStatusTableProps, IStatusTableState> {

    constructor(props) {
        super(props)
    }

    render() {
        let a: Array<StatueTablePanel>;
        a.map((value, index) => {
            <Panel header={value.room} key={`${index}`}>
                <p>{text}</p>
            </Panel>
        })
        return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                {
                    

                    this.props.panels.map((value, index) => {
                        <Panel header={value.room} key={`${index}`}>
                            {
                                value.devices.map((value, index) => {
                                    <span>{value}</span>
                                })
                            }
                        </Panel>
                    })
                }
            </Collapse>
        </div>
        );
    }
}