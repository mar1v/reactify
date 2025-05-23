import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { fetchGuests, createEvent, fetchEvents } = useActions();
    const { guests } = useTypedSelector(state => state.event);
    const { user } = useTypedSelector(state => state.auth);
    const { events } = useTypedSelector(state => state.event);
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [user.username]);
    const addNewEvent = (event: IEvent) => {
        createEvent(event);
        setIsModalVisible(false)
    };
    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify="center" align="middle">
                <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
            </Row>
            <Modal
                title="Add event"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <EventForm guests={guests}
                    submit={addNewEvent} />
            </Modal>

        </Layout>
    )
}

export default Event;
function fetchEvents() {
    throw new Error('Function not implemented.');
}

