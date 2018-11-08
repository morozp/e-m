import {
    createReducerWithStateKeyHandling,
} from 'redux-state-keys';

import { actions } from './actions';
import { createReducer } from 'redux-act';

const initialSubState: {
    list: any[]
} = {
    list: [],
}

const initialState = {};


let id = 1;

const subReducer = createReducer<{ list: any }>(
    (on) => {
        on(
            actions.addItem,
            (state, payload) => {
                id++;
                debugger;
                const newItem = { ...payload, id };
                return { ...state, ...{ list: [newItem, ...state.list,] } }
            });
        on(
            actions.removeItem,
            (state, payload) => {
                debugger;
                return {
                    ...state,
                    ...{ list: [...state.list.filter((_item: any, index: number) => index !== payload)] }
                };
            }
        );
    }, initialSubState);

const reducer = createReducerWithStateKeyHandling(
    subReducer,
    initialSubState,
    initialState,
);

export {
    reducer,
}