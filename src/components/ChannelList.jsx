import React from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import ChannelButton from './ChannelButton';
import ChannelDropdownButton from './ChannelDropdownButton';
import { selectors } from '../store';

const ChannelList = () => {
  const channels = useSelector(selectors.getChannels);

  const renderNavButton = (channel) => {
    const NavButton = channel.removable ? ChannelDropdownButton : ChannelButton;
    return <NavButton channelId={channel.id}>{channel.name}</NavButton>;
  };

  return (
    <Nav as="ul" className="flex-column" variant="pills" fill>
      {channels.map((channel) => (
        <Nav.Item as="li" key={channel.id} className="mb-2">
          {renderNavButton(channel)}
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ChannelList;
