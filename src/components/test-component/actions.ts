import { createAction } from 'redux-act';
import {} from 'redux-state-keys';

interface AddItemParam {
    title: string,
    description: string,
}

interface AddItemPayload {
    title: string,
    description: string,
}

const addItem = createAction(
    'add item',
    ({ title, description }: AddItemParam): AddItemPayload =>
        ({ title, description }),
);

const removeItem = createAction<number,number>(
    'remove item',
    (index: number) => index,
);


const actions ={
    removeItem,
    addItem,
}

export {
    actions,
}
