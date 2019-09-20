import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './app';
import configStore from './store';

const store = configStore();

ReactDOM.render((
        <Provider store={store}>
            <App/>
        </Provider>
    ), 
    document.getElementById("root")
);