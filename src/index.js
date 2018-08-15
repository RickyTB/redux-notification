import Notifications from './components/Notifications/Notifications';
import * as actions from './store/actions';
import * as actionTypes from './store/actions/actionTypes';
import notificationsReducer from './store/reducers/notificationsReducer';
import * as selectors from './store/selectors';
import * as reducerFns from './store/reducers';

export default {Notifications, ...actions, ...actionTypes, notificationsReducer, ...selectors, ...reducerFns};
