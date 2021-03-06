import {createReducer, on} from '@ngrx/store';
import {LoginInformation} from '../model/UserProfil';
import {AuthActions} from '../action-types';


export const authFeatureKey = 'auth';

export interface AuthState {
  user: LoginInformation;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    };
  })
);


