import { Layout, Menu } from 'antd';
import { Color } from 'antd/es/color-picker';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypesSelector';

const Navbar: FC = () => {
  const navigate = useNavigate();

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
        navigate('/');
      },
    },
  ];

  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <Layout.Header>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ color: 'white' }}>Mar1v</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          defaultSelectedKeys={isAuth ? ['logout'] : ['login']}
          items={isAuth ? logoutItems : loginItems}
          disabledOverflow={true}
          overflowedIndicator={null}
        />
      </div>
    </Layout.Header>
  );
};

export default Navbar;