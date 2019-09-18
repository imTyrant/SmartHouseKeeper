import * as React from 'react';
import './style/index.css';

const HouseImagePath = "./img/house.svg";
const MapRef = "MAPREF"

export interface IViewMainProps {
    deviceList: any;
    mode: any;
}

export interface IViewMainStates {
    deviceStatus: any;
}

class ViewWindow extends React.Component <IViewMainProps, IViewMainStates>{
    constructor(props: IViewMainProps) {
        super(props);
    }

    render() {
        return (
            <div id="main-window" className="view-window">
                <img id="house-image" src={HouseImagePath} useMap={`#${MapRef}`}/>
                <map name={`${MapRef}`}>
                    <area id="balcony" shape="poly" coords="70,26,70,66,22,66,22,109,269,109,269,26,70,26"/>
                    <area id="door" shape="poly" coords="74,113,74,128,254,128,254,113,74,113"/>
                </map>
                {
                    <div style={{position:"relative", top:"10px", left:"10px", backgroundColor:"red"}}>{this.props.mode}</div>                    
                }
            </div>
        );
    }
}

export default ViewWindow;