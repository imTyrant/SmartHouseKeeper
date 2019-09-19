import { DeviceIcon } from '.'
import { connect } from 'react-redux';
import { updateDevice } from '../../store/config/actions';
import { UpdatingParam } from '../../store/config/types';

function maDispatchToProps(dispatch: any) {
    return {
        onStatusChangeListener: (id: string, nextStatus: number) => {
            dispatch(updateDevice({id, status: nextStatus}));
        }
    }
}

const DeviceIconWithStore = connect(null, maDispatchToProps)(DeviceIcon);

export default DeviceIconWithStore;