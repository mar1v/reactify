import { IUser } from "../../../models/IUser";
import { AuthActionTypes } from "./types";
import { AppDispatch } from "../..";
import axios from "axios";
import UserService from "../../../api/UserService";


export const AuthActionCreators = {
    setAuth: (isAuth: boolean) => ({ type: AuthActionTypes.SET_AUTH, payload: isAuth }),
    setUser: (user: IUser) => ({ type: AuthActionTypes.SET_USER, payload: user }),
    setIsLoading: (isLoading: boolean) => ({ type: AuthActionTypes.SET_IS_LOADING, payload: isLoading }),
    setError: (error: string) => ({ type: AuthActionTypes.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers();
                const mockUsers = response.data.find(user => user.username === username && user.password === password);
                if (mockUsers) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUsers.username);
                    dispatch(AuthActionCreators.setUser(mockUsers));
                    dispatch(AuthActionCreators.setAuth(true));
                } else {
                    dispatch(AuthActionCreators.setError('User not found'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)

        } catch (e) {
            dispatch(AuthActionCreators.setError('Error'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setAuth(false));

    }
}