import {addNotificationFromAction} from "redux-notification";

import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case actionTypes.BUTTON_PRESSED: return addNotificationFromAction(state, action);
        default: return state;
    }
};

export default reducer;