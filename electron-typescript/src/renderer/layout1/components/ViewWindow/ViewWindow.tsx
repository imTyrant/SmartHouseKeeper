import * as React from 'react';
import './style/index.css';
import PositionChecker from './PositionChecker'

const HouseImagePath = "./img/house.jpg";
const MapRef = "MAPREF"

export interface IViewMainProps {
    deviceList: any;
    mode: any;
}

export interface IViewMainStates {
    deviceStatus: any;
}

let positionChecker = new PositionChecker();

class ViewWindow extends React.Component <IViewMainProps, IViewMainStates>{
    constructor(props: IViewMainProps) {
        super(props);
    }

    render() {
        return (
            <div className="view-window">
                <img id="house-image" src={HouseImagePath} useMap={`#${MapRef}`}/>
                <map name={`${MapRef}`}>
                    <area id="balcony" onMouseOut={(e) => positionChecker.onPositionOutHandler(e)} onMouseOver={(e) => positionChecker.onPositionOndHandler(e)} shape="poly" coords="70,26,70,66,22,66,22,109,269,109,269,26,70,26"/>
                    <area id="door" onMouseOut={(e) => positionChecker.onPositionOutHandler(e)} onMouseOver={(e) => positionChecker.onPositionOndHandler(e)} shape="poly" coords="74,113,74,128,254,128,254,113,74,113"/>
                </map>
                {
                    <div style={{position:"relative", top:"10px", left:"10px", backgroundColor:"red"}}>{this.props.mode}</div>                    
                }
            </div>
        );
    }
}

export default ViewWindow;