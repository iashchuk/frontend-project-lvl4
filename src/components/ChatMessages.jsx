import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { selectors } from '../store';

const getChannelMessages = createSelector(
  [selectors.getMessages, selectors.getCurrentChannelId],
  (messages, currentChannel) => messages.filter(({ channelId }) => channelId === currentChannel),
);

const ChatMessages = () => {
  const messages = useSelector(getChannelMessages);

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
