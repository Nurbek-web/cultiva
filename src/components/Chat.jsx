import { useState, useEffect }  from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Привет, Я Cultiva AI - искусственный интеллект, разработанный для помощи в управлении теплицей. Я могу предоставить информацию, советы и рекомендации по различным аспектам выращивания растений в теплицах. В чем я могу тебе помочь?",
      sentTime: "just now",
      sender: "Cultiva AI",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };
  
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);
  
    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      
      // Check if the 'choices' array exists and has at least one element
      if (response.choices && response.choices.length > 0) {
        const content = response.choices[0]?.message?.content;
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "Cultiva AI",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };
  

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "You are assistent for helping people with greenhouse" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://cultiva-server.vercel.app/chatapi", {
      method: "POST",
      headers: {
        "Authorization": "Bearer ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    return response.json();
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "800px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Cultiva AI is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat;