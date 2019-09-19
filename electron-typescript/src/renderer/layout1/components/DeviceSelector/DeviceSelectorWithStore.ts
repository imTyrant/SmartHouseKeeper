import { DeviceSelector, Selection } from ".";
import { connect } from "react-redux";
import { addDevice } from "../../store/config/actions";
import { AddedDevice } from "../../store/config/types";
// import { Selection } from "./DeviceSelector";


function mapDispatchToProps(dispatch: any) {
    return {
        onDeviceSelected: (selection: Selection) => {
            dispatch(addDevice(selection));
        }
    }
}

const DeviceSelectorWithStore = connect(null,  mapDispatchToProps)(DeviceSelector);

export default DeviceSelectorWithStore;

