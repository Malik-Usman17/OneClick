import {USER_LOGIN} from './types';

export const loginAction = (user) => ({
  type: USER_LOGIN,
  payload: user
});

