import {createAction, props} from '@ngrx/store';
import {LoginInformation} from './model/UserProfil';

export enum UserActionTypes {
  USER_LOGIN = '[Login Page] User Login',
  USER_LOGOUT = '[Top Menu] User Logout'
}

export const login = createAction(
  UserActionTypes.USER_LOGIN,
  props<{user: LoginInformation}>()
);

export const logout = createAction(
  UserActionTypes.USER_LOGOUT,
);
