import { ViewWindow } from ".";
import { connect } from "react-redux";
import { AppStore } from "../../store";

function mapStateToProps(state: AppStore) {
    return {
        deviceList: state.config,
        mode: state.mode
    };
}

let ViewWindowWithStore = connect(mapStateToProps)(ViewWindow);
export default ViewWindowWithStore;