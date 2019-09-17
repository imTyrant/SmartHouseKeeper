import { ControlPanel } from ".";
import { connect } from "react-redux";
import { changeMode } from "../../store/mode/actions";


function mapDispatchToProps(dispatch: any) {
    return {
        onModeChanged: (mode: any) => dispatch(changeMode(mode))
    }
}
const ControlPanelWithStore = connect(null, mapDispatchToProps)(ControlPanel);

export default ControlPanelWithStore;

