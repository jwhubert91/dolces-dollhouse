import React from 'react';
import './ChatButtonsOverlay.css';

function ChatButtonsOverlay() {
  return (
    <div className='chat-buttons-overlay-container'>
      <a href='https://www.instagram.com/dolces_dollhouse/' className='order-button-cta'>
        <span className='whatsapp-order-text'>
          Ordena en Instagram{' '}
          <i className='fa fa-instagram'></i>
        </span>
      </a>
    </div>
  );
}

export default ChatButtonsOverlay;
