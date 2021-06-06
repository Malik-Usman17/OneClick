import {USER_ORDER} from './types';

export const userOrderAction = (user) => ({
  type: USER_ORDER,
  payload: user
});