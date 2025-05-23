import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react'
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions();
    const submit = () => {
        login(username, password);
    }
    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input value={password} type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;
