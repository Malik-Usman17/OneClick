import {CURRENT_USER} from './types';

export const currentUserAction = (user) => ({
  type: CURRENT_USER,
  payload: user
});