import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// importing components
import Chat from './components/Chat';
import Landing from './components/Landing';
import Test from './components/Test';
import Game from './components/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "chat",
    element: <Chat />
  },
  {
    path: "test",
    element: <Test />
  },
  {
    path: "game",
    element: <Game />
  }
]);


const items = [
  getItem('Main', '1', <PieChartOutlined />),
  getItem('Chat', '2', <DesktopOutlined />),
  getItem('Game', '3', <WechatOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}  
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <img
          className="demo-logo"
          src='logo.png'
          alt="Logo"
          style={{
            width: '70px',
            height: '70px',
            maxWidth: '100%',
            borderRadius: '50%',
            margin: '10px',  // Adjust margin as needed
            padding: '10px', // Adjust padding as needed
          }}/>
        
        <Menu style={{padding: ".5rem", marginBottom: ".25rem"}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <RouterProvider router={router} />

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;