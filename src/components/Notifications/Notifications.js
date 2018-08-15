import React, {Component} from 'react';
import {connect} from "react-redux";

import classes from './Notifications.scss';
import {getNotifications} from "../../store/selectors";
import Notification from "../Notification/Notification";
import * as actions from '../../store/actions';

class Notifications extends Component {

    render() {
        return (
            <div className={classes.Notifications}>
                {this.props.notifications.map(notification => (
                    <Notification key={notification.id} {...notification} remove={this.props.remove}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notifications: getNotifications(state)
});

export default connect(mapStateToProps, {
    remove: actions.removeNotification
})(Notifications);