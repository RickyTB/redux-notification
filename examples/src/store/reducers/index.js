import {notificationsReducer, NOTIFICATIONS} from "redux-notification";
import {combineReducers} from "redux";

import myNotificationReducer from "./myNotificationReducer";

const rootReducer = combineReducers({
    [NOTIFICATIONS]: notificationsReducer(myNotificationReducer),
});

export default rootReducer;