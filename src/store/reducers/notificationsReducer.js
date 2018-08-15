import * as actionTypes from '../actions/actionTypes';
import genID from "../../utils/gen-id";

const initialState = [];

const reducer = (userReducer) => (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTIFICATION: return addNotification(state, action);
        case actionTypes.REMOVE_NOTIFICATION: return removeNotification(state, action);
        default: return userReducer ? userReducer(state, action) : state;
    }
};

const addNotification = (state, {text, displayType, timeout}) => [...state, {
    id: genID(8),
    text,
    displayType,
    timeout
}];

const removeNotification = (state, {id}) => state.filter((notif) => notif.id !== id);

export default reducer;
