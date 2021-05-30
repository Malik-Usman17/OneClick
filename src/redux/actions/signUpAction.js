import {USER_SIGNUP} from './types';

export const signUpAction = (user) => ({
  type: USER_SIGNUP,
  payload: user
});