import * as actionTypes from './actionTypes';

export const buttonPressed = () => {
    return {
        type: actionTypes.BUTTON_PRESSED,
        notification: {
            displayType: 'success',
            text: 'Button pressed :O',
            timeout: 3
        }
    }
};