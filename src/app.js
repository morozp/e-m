import React from 'react';
import ReactDOM from 'react-dom'

import * as x from 'redux-state-keys';

import { App } from './components/app';
import fromPairs from 'ramda/es/fromPairs';

ReactDOM.render(
    <App />,
    document.getElementById('spa'),
);

