import {React} from 'react';
import ReactDOM from 'react-dom';
import {HouseDetail} from '../configure/house-detail';


const bulb = HouseDetail.device.ac;

class SmartBulb extends React.Component {

    constructor(props) {
        super(props);
        this.state.deviceID = props.deviceID;
    }
    

    render() {
        return (
            <div id={this.state.deviceID}>
                <img src={bulb.img} style={{width:`40px`, height: `40px`}}></img>
            </div>
        );
    }
}

ReactDOM.render(<SmartBulb deviceID={"test-id"}/>, document.querySelector("#container"));
