import { StatusTable } from ".";
import { connect } from "react-redux";
import { AppStore } from "../../store";

function mapStateToProps(state: AppStore) {
    return {
        devicesList: state.config
    };
}

let StatusTableWithStore = connect(mapStateToProps)(StatusTable);
export default StatusTableWithStore;