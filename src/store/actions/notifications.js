import * as actionTypes from './actionTypes';

export const addNotification = ({displayType, text, timeout}) => {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        text,
        displayType,
        timeout
    };
};

export const removeNotification = id => {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
        id
    };
};
