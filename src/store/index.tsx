import { thunk } from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

// @ts-ignore
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
