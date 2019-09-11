import * as React from 'react';

export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
}

export default class Hello extends React.Component<HelloProps, object>{
    constructor(props: HelloProps = {name:"", enthusiasmLevel:1}) {
        super(props);
    }

    private getExclamationMarks() {
        return Array(this.props.enthusiasmLevel === undefined || this.props.enthusiasmLevel < 0 ? 1: this.props.enthusiasmLevel).join(`!`);
    }

    render() {
        return (
            <div>
                {`Hello ${this.props.name} ${this.getExclamationMarks()}`}
            </div>
        );
    }
}