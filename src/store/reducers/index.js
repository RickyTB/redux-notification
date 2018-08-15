import genID from "../../utils/gen-id";

export const NOTIFICATIONS = 'NOTIFICATIONS';

export const addNotificationFromAction = (state, {notification}) => [...state, {
    id: genID(8),
    ...notification
}];

export const createNotification = (state, notification) => [...state, {
    id: genID(8),
    ...notification
}];