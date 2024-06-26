import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
  WechatOutlined,
  LaptopOutlined
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
  BrowserRouter,
  redirect,
  useNavigate,
  Routes,
  Route
} from "react-router-dom";

// importing components
import Chat from './components/Chat';
import Landing from './components/Landing';
import Test from './components/Test';
import Game from './components/Game';
import Articles from './components/Articles';
import Article1 from './components/articles/Article1';
import Article2 from './components/articles/Article2';
import Article3 from './components/articles/Article3';
import Article4 from './components/articles/Article4';
import Article5 from './components/articles/Article5';
import Automation from './components/Automation';

const items = [
  getItem('Main', '1', <PieChartOutlined />),
  getItem('Chat', '2', <DesktopOutlined />),
  getItem('Game', '3', <WechatOutlined />),
  getItem('Articles', '4', <ContainerOutlined />),
  getItem("Automation", '5', <LaptopOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  const handleMenuClick = ({ key }) => {
    // const { target } = navigation.find(item => item.key === key) || {};
    // if (target) {
    //   navigate(target);
    // }
    if (key == 1) {
      navigate("")
    }
    else if (key == 2) {
      navigate("chat")
    }
    else if (key == 3) {
      navigate("game")
    }
    else if (key == 4) {
      navigate("articles")
    }
    else if (key == 5) {
      navigate("automation")
    }
    console.log(key)
  };
    
  
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
        
        <Menu onClick={handleMenuClick} style={{padding: ".5rem", marginBottom: ".25rem"}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/game*" element={<Game />} />
                <Route path="/automation" element={<Automation />} />,
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/1" element={<Article1 />} />
                <Route path="/articles/2" element={<Article2 />} />
                <Route path="/articles/3" element={<Article3 />} />
                <Route path="/articles/4" element={<Article4 />} />
                <Route path="/articles/5" element={<Article5 />} />
              </Routes>
            {/* <RouterProvider router={router} /> */}

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