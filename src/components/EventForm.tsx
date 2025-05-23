import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { FC, useState } from 'react'
import { rules } from '../utils/rules'
import { IUser } from '../models/IUser'
import { IEvent } from '../models/IEvent'
import { Dayjs } from 'dayjs'
import moment from 'moment'
import { formatDate } from '../utils/date'
import { useTypedSelector } from '../hooks/useTypesSelector'

interface EventFormProps {
    guests: IUser[]
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState({
        author: '',
        guests: '',
        date: '',
        description: ''
    } as IEvent);

    const { user } = useTypedSelector(state => state.auth)
    const selectDate = (date: Dayjs | null) => {
        if (date) {
            setEvent({ ...event, date: formatDate(date.toDate()) })
        }

    }

    const submitForm = () => {
        props.submit({ ...event, author: user.username });
    }
    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event name"
                name="description"
                rules={[rules.required('Please input event name!')]}
            >
                <Input
                    value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} />
            </Form.Item>
            <FormItem
                label="Guests"
                name="guests"
                rules={[rules.required('Please input guests!')]}
            >
                <Select mode="multiple"
                    placeholder="Select guests"
                    onChange={(guests: string) => setEvent({ ...event, guests })}
                >
                    {props.guests.map(guest => <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>)}
                </Select>
            </FormItem>
            <FormItem
                label="Date"
                name="date"
                rules={[rules.required('Please input date!'), rules.isDateAfter('Date must be in the future!')]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)} />
            </FormItem>
            <Row justify="end">
                <FormItem>
                    <Button type="primary" htmlType="submit">Create</Button>
                </FormItem>
            </Row>
        </Form>
    )
}

export default EventForm
