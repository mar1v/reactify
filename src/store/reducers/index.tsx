import { authReducer } from '../reducers/auth/auth';
import eventReducer from '../reducers/event/index';

const reducers = {
    auth: authReducer,
    event: eventReducer,
};

export default reducers;