import { ADD_ITEM, REMOVE_ITEM } from './actions';

const defaultState = {
    list: [],
}

let id = 1;
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case (ADD_ITEM):
        id++;
            debugger;
            const newItem = {...action.payload, id};
            return  { ...state, ...{ list: [ newItem,...state.list,] } }            
        case (REMOVE_ITEM):
            debugger;
            return { ...state, ...{ list: [...state.list.filter((item, index) => index !== action.payload)] } };
        default:
            return state;


    }
}

export {
    reducer,
}