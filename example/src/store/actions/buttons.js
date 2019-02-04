import * as actionTypes from './actionTypes'

export const buttonPressed = (type = 'default') => {
  return {
    type: actionTypes.BUTTON_PRESSED,
    notification: {
      displayType: type,
      text: 'Button pressed',
      timeout: 5
    }
  }
};
