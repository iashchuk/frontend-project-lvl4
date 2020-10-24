// @ts-check

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import cx from 'classnames';

const ChannelList = ({ channels, currentChannelId }) => (
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

export default ChannelList;
