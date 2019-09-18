import { AddedDevicesList, AddedDevice, DeviceConfigAction } from './types';

const initState: AddedDevicesList = {
    list: new Map<string, AddedDevice>(),
    detail: new Map<string, string[]>()
}

export function configReducer(state: AddedDevicesList = initState,  action: DeviceConfigAction): AddedDevicesList {
    switch(action.type) {
        case "ADD_DEVICE":
            state.list.set(action.config.id, action.config);
            let oldRoomList = state.detail.get(action.config.room);
            state.detail.set(action.config.room, [...oldRoomList, action.config.id]);
            return state;
        case "REMOVE_DEVICE":
            if (state.list.has(action.id)) {
                let room = state.list.get(action.id).room;
                state.list.delete(action.id);
                let index = state.detail.get(room).indexOf(action.id);
                state.detail.set(room, state.detail.get(room).splice(0, index));
            }
            return state;
        default:
            return state;
    }
}