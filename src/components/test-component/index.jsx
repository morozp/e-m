import { connect } from 'react-redux';

import { TestComponent as Component } from './test-component';
import * as actions from './actions';

const mapProps = (state) => {
    return {
        list: state.testComponent.list,
    }
}

const TestComponent = connect(mapProps, {
    addItem: actions.addItem,
    removeItem: actions.removeItem,
})(
    Component
);

export {
    TestComponent,
}