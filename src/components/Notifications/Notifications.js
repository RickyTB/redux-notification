import React from 'react';
import {connect} from "react-redux";

import classes from './Notifications.scss';
import {getNotifications} from "../../store/selectors";
import Notification from "../Notification/Notification";
import * as actions from '../../store/actions';

const Notifications = ({notifications, remove}) => (
  <div className={classes.Notifications}>
    {notifications.map(notification => <Notification key={notification.id} remove={remove} {...notification}/>)}
  </div>
);

const mapStateToProps = state => ({
  notifications: getNotifications(state)
});

export default connect(mapStateToProps, {
  remove: actions.removeNotification
})(Notifications);
