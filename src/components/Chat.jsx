import React, { useState, useEffect } from 'react';
import { Input, Button, List, Avatar } from 'antd';

const { TextArea } = Input;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Fetch initial greeting from OpenAI
    sendMessageToOpenAI('Hello, ChatBot!');
  }, []);

  const sendMessageToOpenAI = async (message) => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 100,
        }),
      });

      const data = await response.json();
      const botReply = data.choices[0].text.trim();
      setMessages([...messages, { role: 'bot', content: botReply }]);
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { role: 'user', content: inputMessage }]);
    sendMessageToOpenAI(inputMessage);
    setInputMessage('');
  };

  return (
    <div style={{ width: 400, margin: 'auto', marginTop: 20 }}>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(msg, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: msg.role === 'bot' ? '#87d068' : '#108ee9' }} icon={msg.role === 'bot' ? 'robot' : 'user'} />}
              title={msg.role.toUpperCase()}
              description={msg.content}
            />
          </List.Item>
        )}
      />
      <div style={{ marginTop: 10 }}>
        <TextArea
          rows={2}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button type="primary" style={{ marginTop: 10 }} onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;