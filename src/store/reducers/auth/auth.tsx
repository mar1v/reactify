import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionTypes, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: '',
}

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };
        case AuthActionTypes.SET_USER:
            return { ...state, user: action.payload };
        case AuthActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case AuthActionTypes.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
}