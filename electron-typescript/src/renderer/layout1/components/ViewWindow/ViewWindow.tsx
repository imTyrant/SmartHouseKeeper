import * as React from 'react';
import './style/index.css';
import { AddedDevicesList } from '../../store/config/types';
import { ConfigLoader } from '../../utils/config-loader';
import { DeviceIconWithStore } from '../DeviceIcon';

const HouseImagePath = "./img/house.svg";
const MapRef = "MAPREF"

export interface IViewMainProps {
    deviceList: AddedDevicesList;
    mode: any;
}

export interface IViewMainStates {

}

class ViewWindow extends React.Component<IViewMainProps, IViewMainStates>{
    constructor(props: IViewMainProps) {
        super(props);
    }

    updateDeviceIcons(): React.ReactElement {
        let content: React.ReactElement[] = [];
        this.props.deviceList.detail.forEach((list) => {
            for (let id of list) {
                const device = this.props.deviceList.list.get(id)!;
                const fragment = (
                    <div id={id} key={id} style={{ position: "absolute", top: device.coords.y, left: device.coords.x }}>
                        {/* Using {{...device}} instead of { device } is for update child component. React diff */}
                        <DeviceIconWithStore info={{ ...device }} />
                    </div>
                );
                content.push(fragment);
            }
        });
        return (<React.Fragment>{content}</React.Fragment>);
    }

    render() {
        const content = this.updateDeviceIcons();
        return (
            <div id="main-window" className="view-window">
                <img id="house-image" src={HouseImagePath} useMap={`#${MapRef}`} />
                <map name={`${MapRef}`}>
                    <area id="balcony" shape="poly" coords="104,40,104,103,44,103,44,149,277,150,277,150,277,42" />
                    <area id="parlour" shape="poly" coords="44,168,44,537,284,537,284,377,277,322,280,168 " />
                    <area id="hallway" shape="poly" coords="284,377,415,377,415,429,623,431,623,322,277,322" />
                    <area id="bedroom-left" shape="poly" coords="297,108,297,306,510,306,510,108" />
                    <area id="bedroom-right" shape="poly" coords="530,108,530,306,640,306,640,387,725,387,725,108" />
                    <area id="bedroom-bottom" shape="poly" coords="640,405,640,448,530,448,530,536,725,536,725,405" />
                    <area id="bathroom" shape="poly" coords="416,449,416,537,511,537,511,449" />
                    <area id="kitchen" shape="poly" coords="303,394,303,537,396,537,396,394" />
                    <area id="window-balcony" shape="poly" coords="101,21,101,36,279,36,279,21" />
                    <area id="window-bedroom-left" shape="poly" coords="297,92,297,108,424,108,424,92" />
                    <area id="window-bedroom-right" shape="poly" coords="600,92,600,108,725,108,725,92" />
                    <area id="door-bedroom-left" shape="poly" coords="450,308,450,323,511,323,511,308" />
                    <area id="door-bedroom-right" shape="poly" coords="529,308,529,323,592,323,592,308" />
                    <area id="door-bedroom-bottom" shape="poly" coords="527,432,527,446,581,446,581,432" />
                    <area id="door-kitchen" shape="poly" coords="458,432,458,446,512,446,512,432" />
                    <area id="door-kitchen" shape="poly" coords="286,399,286,481,302,481,302,399" />
                    <area id="door-main" shape="poly" coords="220,539,220,553,282,553,282,539" />
                    <area id="window-kitchen" shape="poly" coords="299,539,299,553,365,553,365,539" />
                    <area id="window-bathroom" shape="poly" coords="453,539,453,553,511,553,511,539" />
                    <area id="window-bedroom-bottom" shape="poly" coords="607,539,607,553,701,553,701,539" />
                    <area id="door-parlour" shape="poly" coords="106,153,106,166,256,166,256,153" />
                </map>
                {
                    content
                }
            </div>
        );
    }
}

export default ViewWindow;