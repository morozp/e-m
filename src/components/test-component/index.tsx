import { compose } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {   
    bindStateKeyToActionCreators,
    
} from 'redux-state-keys';

import { TestComponent as Component } from './test-component';
import { actions}  from './actions';
import {
    createSelectorWithStateKeyHandling,
    bindStateKeyToSelector,
} from 'redux-state-keys';
import { Dispatch } from 'redux-act';



const getList = createSelectorWithStateKeyHandling((testComponentState:any) => testComponentState.list, {},'testComponent');

const getMapProps = (stateKey:string) => {
    const getListByKey = bindStateKeyToSelector(stateKey, getList);
    return (state:any) => {
        return {
            list: getListByKey(state),
        }
    }
}

const getDispatchedActions = (stateKey: string) => {
    debugger;
    const boundActionCreators = bindStateKeyToActionCreators(stateKey, {
        removeItem: actions.removeItem,
        addItem: actions.addItem,
    });

    return (dispatch: any) => bindActionCreators(boundActionCreators, dispatch);
}

const getTestComponent = (stateKey:string) => {
    const mapStateToProps = getMapProps(stateKey);
    const dispatchedActions = getDispatchedActions(stateKey);
    return connect(
        mapStateToProps,
        dispatchedActions,
    )(
        Component,
    );
};

export {
    getTestComponent,
}