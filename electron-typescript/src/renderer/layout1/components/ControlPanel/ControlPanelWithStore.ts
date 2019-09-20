import { ControlPanel } from ".";
import { connect } from "react-redux";
import { changeMode } from "../../store/mode/actions";
import { ControlMode } from "../../store/mode/types";


function mapDispatchToProps(dispatch: any) {
    return {
        onModeChanged: (mode: ControlMode) => dispatch(changeMode(mode))
    }
}
const ControlPanelWithStore = connect(null, mapDispatchToProps)(ControlPanel);

export default ControlPanelWithStore;

