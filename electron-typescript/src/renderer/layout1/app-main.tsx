import * as React from 'react';

export interface IAppProps {

};

export interface IAppStates {

};

export default class App extends React.Component<IAppProps, IAppStates> {
    static defaultProps = {

    };

    constructor(props: IAppProps) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {}
            </div>
        );
    }
}