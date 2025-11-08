import React, { useState } from 'react';
import '../styles.css';

interface ChatMessage {
  id: string;
  sender: 'User' | 'Support';
  text: string;
}

export default function LiveChatSupport() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'User', text: 'My home damaged, where can find' },
    { id: '2', sender: 'Support', text: 'Please enter your location to find nearest open shelters and resources.' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, {
        id: Math.random().toString(36).slice(2),
        sender: 'User',
        text: inputMessage.trim()
      }]);
      setInputMessage('');
      
      // Simulate support response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Math.random().toString(36).slice(2),
          sender: 'Support',
          text: 'Thank you for your message. We are here to help.'
        }]);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="section-header section-header-blue">
        <span>LIVE CHAT SUPPORT</span>
      </div>
      <div className="section-content">
        <div className="chat-status">
          <div className="status-indicator"></div>
          <span>Live Support Online</span>
        </div>
        
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className="chat-message">
              <div className="chat-message-label">{message.sender}:</div>
              <div className="chat-message-text">{message.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="chat-input-container">
          <svg className="attachment-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
          <input
            type="text"
            className="chat-input"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit" className="chat-send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

