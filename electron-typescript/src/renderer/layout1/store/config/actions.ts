import { ADD_DEVICE, AddedDevice, REMOVE_DEVICE } from './types';


export function addDevice(config: AddedDevice) {
    return {
        type: ADD_DEVICE,
        config
    }
}

export function removeDevice(id: string) {
    return {
        type : REMOVE_DEVICE,
        id
    }
}