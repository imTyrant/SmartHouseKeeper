import { DeviceSelector, Selection } from ".";
import { connect } from "react-redux";
import { addDevice } from "../../store/config/actions";
import { AddedDevice } from "../../store/config/types";
// import { Selection } from "./DeviceSelector";


function mapDispatchToProps(dispatch: any) {
    return {
        onDeviceSelected: (selection: Selection) => {
            let test: AddedDevice = {
                coords: {x: selection.x, y: selection.y},
                id: `${selection.room}::${selection.device}`,
                room: selection.room,
                identifier: selection.device
            }
            dispatch(addDevice(test));
        }
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {};
}

const DeviceSelectorWithStore = connect(mapStateToProps,  mapDispatchToProps)(DeviceSelector);

export default DeviceSelectorWithStore;

