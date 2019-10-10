# Redux Notification

[![NPM](https://img.shields.io/npm/v/redux-notification.svg)](https://www.npmjs.com/package/redux-notification) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Ever wanted to notify users in response of an action? This library is for you!

Dispatch an action and use it to show a notification.

## Getting Started

### Prerequisites

In order to use Redux Notification the following libraries are required:

- React
- Redux
- React Redux

### Installation

* Add the library to your project.
```
npm install --save redux-notification
```
* Place the **Notifications** component in the top level of your app.
```JSX
const app = (
  <Provider store={store}>
    <div>
       <!-- Your content -->
       <Notifications/>
    </div>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
```
* Create a reducer to handle the actions for which you want to display a notification
```javascript
import {createNotification, addNotificationFromAction} from 'redux-notification'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_PRESSED:
      return addNotificationFromAction(state, action)
    case actionTypes.ERROR_ACTION:
      return createNotification(state, {
        displayType: "error",
        text: `Error: ${action.error.message}`,
        timeout: 5
      })
    default:
      return state
  }
}

export default reducer
```
* Add the **notificationsReducer** function to you main reducer and pass your recently created notification reducer.
```javascript
import {notificationsReducer, NOTIFICATIONS} from 'redux-notification'
import {combineReducers} from 'redux'

import myNotificationReducer from './myNotificationReducer'

const rootReducer = combineReducers({
  [NOTIFICATIONS]: notificationsReducer(myNotificationReducer),
})

export default rootReducer
```
* That's it, you can now display notifications in response of a dispatched action.
## Usage

The notification object should have the following properties:
```javascript
{
  displayType: 'success' || 'error' || 'info' || 'warning' || 'default',
  text: 'The text that will be displayed in the notification.',
  timeout: 60 //(time in seconds to dismiss the notification)
}
```

There are two ways to use this library.
1. Add the notification directly in the action and use the **addNotificationFromAction** function  in your reducer
```javascript
//actions.js
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

//myNotificationReducer.js
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_PRESSED:
      return addNotificationFromAction(state, action)
    default:
      return state
  }
}
```
2. Create the notification object in the reducer directly and use the **createNotification** function
```javascript
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR_ACTION:
      return createNotification(state, {
        displayType: "error",
        text: `Error: ${action.error.message}`,
        timeout: 5
      })
    default:
      return state
  }
}
```

## Contributing

Feel free to submit pull requests with bug fixes or new features.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RickyTB/redux-notification/tags). 

## Authors

* **Ricardo Baquero** - *Initial work*

See also the list of [contributors](https://github.com/RickyTB/redux-notification/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

