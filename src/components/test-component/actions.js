
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addItem = ({ title, description }) => {
    debugger;
    return {
        type: ADD_ITEM,
        payload: { title, description },
    }
}

const removeItem = (index) => {
    debugger;
    return {
        type: REMOVE_ITEM,
        payload: index,
    }
}
export {
    ADD_ITEM,
    REMOVE_ITEM,
    addItem,
    removeItem,
}