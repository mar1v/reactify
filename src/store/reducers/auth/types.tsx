

export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionTypes {
    SET_AUTH = 'SET_AUTH',
}

export interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    payload: boolean;
}

export type AuthAction = SetAuthAction;