import * as React from 'react';
import * as PropTypes from 'prop-types';

const itemDescription = 'description';
const itemTitle = 'item title';

const TestComponent = (props: any) => {
    const { list = [], addItem, removeItem } = props;
    const addItemWrapper = () => {
        debugger;
        addItem({ title: itemTitle, description: itemDescription });
    };

    const removeItemHandle = () => {
        debugger;
        removeItem(list.length - 1);
    }

    return <div className='test-component'>
        <button onClick={addItemWrapper}>Add Item</button>
        <button onClick={removeItemHandle}>Remove Item</button>
        <div className='item-fileds'>
            <input type='text' />
            <input type='text' />

        </div>
        <ul>
            {list.map((item:any) => (
                <li key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.descripton}</p>
                </li>))}
        </ul>
    </div>
}

TestComponent.propTypes = {
    list: PropTypes.shape({
        title: PropTypes.string,
        descripton: PropTypes.number,
    }),
    addItem: PropTypes.func,
};

export { TestComponent }