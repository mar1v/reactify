import { Badge, Calendar } from 'antd'
import React, { FC } from 'react'
import { IEvent } from './../models/IEvent';
import { formatDate } from '../utils/date';
import { Dayjs } from 'dayjs';

interface IEventProps {
    events: IEvent[];
}

const EventCalendar: FC<IEventProps> = (props) => {
    function dateCellRender(value: Dayjs) {
        const date = value.toDate();
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map(ev => <Badge key={ev.description} count={ev.description} />)}
            </div>
        );
    }
    return (
        <Calendar
            dateCellRender={dateCellRender} />
    )
}

export default EventCalendar
