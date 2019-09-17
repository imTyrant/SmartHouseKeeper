import { combineReducers, createStore } from 'redux';
import { modeReducer } from './mode/reducers';


const rootReducer = combineReducers({
    mode: modeReducer
});

export type AppStore = ReturnType<typeof rootReducer>

export default function configStore() {
    const store = createStore(rootReducer);
    return store;
}