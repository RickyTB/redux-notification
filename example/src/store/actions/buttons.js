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

export const importantAlert = (type = 'default') => {
  return {
    type: actionTypes.BUTTON_PRESSED,
    notification: {
      displayType: type,
      text: 'Important',
      timeout: 60
    }
  }
};

export const longNotification = (type = 'default') => {
  return {
    type: actionTypes.BUTTON_PRESSED,
    notification: {
      displayType: type,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus augue a libero tristique blandit. Quisque dignissim vulputate est, ac blandit ante vestibulum sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi placerat nisl et faucibus posuere. Donec at sapien urna. Pellentesque maximus, massa ac dictum porttitor, libero ante molestie lectus, a mollis dolor est at odio. Ut fringilla maximus nisl. ',
      timeout: 60
    }
  }
};
