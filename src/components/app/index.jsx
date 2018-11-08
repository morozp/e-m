import React from 'react';
import { Provider } from 'react-redux'

import { configureStore } from '../../store/configure-store';

import { getTestComponent } from '../test-component';

const store = configureStore();
const a = { ...{ a: 1 } };
const TestComponent1 = getTestComponent(1);
const TestComponent2 = getTestComponent(2);
const App = () => {
    return <Provider store={store} >
        <div>
            APP CONTAINER 23
            <span>{[...[1]]}</span>
            <span>{JSON.stringify(a)}</span>
            <TestComponent1/>
            <TestComponent2/>
        </div>
    </Provider>
}

export {
    App,
}