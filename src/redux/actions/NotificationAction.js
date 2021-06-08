import {CLIENT_NOTIFICATION} from './types';

export const NotificationAction = (note) => ({
  type: CLIENT_NOTIFICATION,
  payload: note
});