import { AuthAction, AuthActionTypes, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }

        default:
            return state;
    }
}