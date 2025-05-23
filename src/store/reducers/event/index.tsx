import { EventAction, EventState, EventActionTypes } from "./types";


const initialState: EventState = {
    events: [],
    guests: [],
}


export default function eventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionTypes.SET_EVENTS:
            return { ...state, events: action.payload };
        case EventActionTypes.SET_GUESTS:
            return { ...state, guests: action.payload };
        default:
            return state;
    }
}