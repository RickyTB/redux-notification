import React from 'react'
import {Notifications} from 'redux-notification'
import {connect} from 'react-redux'
import 'animate.css/animate.css';

import * as buttonActions from './store/actions/buttons'

const app = ({buttonPressed}) => {
  return (
    <div>
      <button onClick={() => buttonPressed('default')}>Show default notification</button>
      <br/>
      <button onClick={() => buttonPressed('success')}>Show success notification</button>
      <br/>
      <button onClick={() => buttonPressed('error')}>Show error notification</button>
      <Notifications/>
    </div>
  )
};

export default connect(null, {
  buttonPressed: buttonActions.buttonPressed
})(app)
