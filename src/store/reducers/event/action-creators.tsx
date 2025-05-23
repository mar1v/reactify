import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionTypes, SetEventsAction, SetGuestsAction } from "./types";
import UserService from "../../../api/UserService";


export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEventsAction => ({ type: EventActionTypes.SET_EVENTS, payload: events }),
    setGuests: (guests: IUser[]): SetGuestsAction => ({ type: EventActionTypes.SET_GUESTS, payload: guests }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
            dispatch(EventActionCreators.setGuests(response.data));
        } catch (e) {
            alert(e);
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (e) {
            alert(e);
        }
    },
    fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(event => event.guests === userName || event.author === userName);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {
            alert(e)
        }

    },
}