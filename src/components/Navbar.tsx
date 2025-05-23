import { Layout, Menu, Row, Col, App } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const loginItems = [
    {
      key: 'login',
      label: 'Login',
      onClick: () => navigate('/login'),
    },
  ];

  const logoutItems = [
    {
      key: 'logout',
      label: 'Logout',
      onClick: () => {
        logout();
      },
    },
  ];

  const { isAuth, user } = useTypedSelector(state => state.auth)

  return (
    <Layout.Header>
      <Row justify="end" align="middle">
        <Col style={{ color: 'white', marginRight: '20px' }}>{user.username}</Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            defaultSelectedKeys={['1']}
            items={isAuth ? logoutItems : loginItems}
            disabledOverflow={true}
            overflowedIndicator={null}
          />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

