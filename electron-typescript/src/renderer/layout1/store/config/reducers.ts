import { AddedDevicesList, AddedDevice, DeviceConfigAction } from './types';

const initState: AddedDevicesList = {
    list: new Map<string, AddedDevice>(),
    detail: new Map<string, string[]>()
}

export function configReducer(state: AddedDevicesList = initState, action: DeviceConfigAction): AddedDevicesList {
    switch (action.type) {
        case "ADD_DEVICE":
            let oldRoomList = state.detail.get(action.config.room);
            oldRoomList = (oldRoomList === undefined) ? new Array<string>() : oldRoomList;
            const id = `${action.config.room}_${action.config.device}_${oldRoomList.length + 1}`
            state.list.set(id, {
                id,
                identifier: action.config.device,
                room: action.config.room,
                detail: action.config.detail,
                coords: { x: action.config.x, y: action.config.y },
                status: 0 // Here, we set the first state as its default state！
            });
            state.detail.set(action.config.room, [...oldRoomList, id]);
            return { list: state.list, detail: state.detail };

        case "REMOVE_DEVICE": // Potential bug
            if (state.list.has(action.id)) {
                let room = state.list.get(action.id)!.room;
                state.list.delete(action.id);
                let index = state.detail.get(room)!.indexOf(action.id);
                state.detail.set(room, state.detail.get(room)!.splice(0, index));
            }
            return { list: state.list, detail: state.detail };

        case "UPDATE_DEVICE":
            if (state.list.has(action.param.id)) {
                state.list.get(action.param.id)!.status = action.param.status;
            }
            return { list: state.list, detail: state.detail };
        default:
            return state;
    }
}