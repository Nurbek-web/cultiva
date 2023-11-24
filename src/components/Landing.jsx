import React from 'react';
import { Layout, Typography, Row, Col, Card, Button } from 'antd';
import {useNavigate } from "react-router-dom"

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Landing = () => {
    const navigate = useNavigate()

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Title style={{ color: 'white' }} level={2}>
          Cultiva AI
        </Title>
      </Header>
      <Content style={{ padding: '50px' }}>
        {/* Games Section */}
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Title level={3}>Educational Games</Title>
          </Col>
          <Col span={8}>
            <Card title="NIS Greenhouse" onClick={() => {navigate("game")}} hoverable>
              <Button type="primary">Play Now</Button>
            </Card>
          </Col>
        </Row>

        {/* AI Bot Section */}
        <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
          <Col span={24} onClick={() => {navigate("chat")}}>
            <Title level={3}>AI Educational Bot</Title>
          </Col>
          <Col span={12}>
            <Card title="Chat with our AI Bot" onClick={() => {navigate("chat")}} hoverable>
              <Button type="primary">Chat Now</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card onClick={() => {navigate("chat")}} title="Ask Questions" hoverable>
              <Button type="primary">Ask Now</Button>
            </Card>
          </Col>
        </Row>

        {/* Educational Articles Section */}
        <Row gutter={[16, 16]} style={{ marginTop: '40px' }}>
          <Col span={24} >
            <Title level={3}>Educational Articles</Title>
          </Col>
          <Col span={24}>
            <Card>
              <Title level={4}>Understanding Greenhouse Effect</Title>
              <Paragraph>
                Learn about the greenhouse effect and its impact on the
                environment. Explore how technology can contribute to
                sustainable solutions.
              </Paragraph>
              <Button type="primary" onClick={() => {navigate("articles")}}>Read Article</Button>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Educational Hub ©2023</Footer>
    </Layout>
  );
};

export default Landing;
