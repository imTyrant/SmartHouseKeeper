import { combineReducers, createStore } from 'redux';
import { modeReducer } from './mode/reducers';
import { configReducer } from './config/reducers';


const rootReducer = combineReducers({
    mode: modeReducer,
    config: configReducer
});

export type AppStore = ReturnType<typeof rootReducer>

export default function configStore() {
    const store = createStore(rootReducer);
    return store;
}