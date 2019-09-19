import { ADD_DEVICE, REMOVE_DEVICE, DeviceConfigAction, UpdatingParam, UPDATE_DEVICE } from './types';
import { Selection } from '../../components/DeviceSelector';


export function addDevice(selection: Selection): DeviceConfigAction {
    return {
        type: ADD_DEVICE,
        config: selection
    }
}

export function removeDevice(id: string): DeviceConfigAction {
    return {
        type: REMOVE_DEVICE,
        id
    }
}

export function updateDevice(param: UpdatingParam) : DeviceConfigAction {
    return {
        type: UPDATE_DEVICE,
        param
    }
}