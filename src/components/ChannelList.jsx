// @ts-check

import React from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import cx from 'classnames';
import selectors from '../store/selectors';

const ChannelList = () => {
  const channels = useSelector(selectors.getChannels);
  const currentChannelId = useSelector(selectors.getCurrentChannelId);

  return (
    <Nav as="ul" className="flex-column" variant="pills" fill>
      {channels.map(({ id, name }) => (
        <Nav.Item as="li" key={id}>
          <Nav.Link as="button" className={cx('btn btn-block btn-primary mb-2 text-left', { 'btn-light': id !== currentChannelId })}>
            {name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ChannelList;
