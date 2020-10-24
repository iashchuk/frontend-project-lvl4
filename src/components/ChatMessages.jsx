import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../store/selectors';

const ChatMessages = () => {
  const messages = useSelector(selectors.getMessages);

  return (
    <div id="messages-box" className="chat-messages overflow-auto mb-3">
      {messages.map((item) => (
        <div key={item.id}>
          <b>
            {item.nickname}
            :&nbsp;
          </b>
          {item.message}
        </div>
      ))}

    </div>
  );
};

export default ChatMessages;
