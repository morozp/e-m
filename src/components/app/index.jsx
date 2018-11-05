import React from 'react';
import { Provider } from 'react-redux'

import { configureStore } from '../../store/configure-store';

import { TestComponent } from '../test-component';

const store = configureStore();
const a = { ...{ a: 1 } };
const App = () => {
    return <Provider store={store} >
        <div>
            APP CONTAINER 23
            <span>{[...[1]]}</span>
            <span>{JSON.stringify(a)}</span>
            <TestComponent/>
        </div>
    </Provider>
}

export {
    App,
}