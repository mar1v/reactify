import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";



export interface EventState {
    guests: IUser[];
    events: IEvent[];

}

export enum EventActionTypes {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
    type: EventActionTypes.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventsAction {
    type: EventActionTypes.SET_EVENTS;
    payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventsAction;