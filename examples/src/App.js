import React from 'react';
import {Notifications} from "redux-notification";
import {connect} from "react-redux";

import * as buttonActions from './store/actions/buttons';

const app = props => {
    return (
        <div>
            <button onClick={props.buttonPressed}>Show notification</button>
            <Notifications/>
        </div>
    );
};

export default connect(null, {
    buttonPressed: buttonActions.buttonPressed
})(app);
