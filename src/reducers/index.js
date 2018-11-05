import { combineReducers } from 'redux';

import { reducer } from '../components/test-component/reducer';

export const rootReducer = combineReducers(
    { testComponent: reducer }
);