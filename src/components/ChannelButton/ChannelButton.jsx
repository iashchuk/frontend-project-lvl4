import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import selectors from '../../store/selectors';
import actions from '../../store/actions';

const ChannelButton = ({ channelId, children }) => {
  const currentChannelId = useSelector(selectors.getCurrentChannelId);
  const dispatch = useDispatch();

  const handleChannelClick = () => {
    dispatch(actions.setCurrentChannelId(channelId));
  };

  return (
    <Button
      className="btn btn-block text-left"
      variant={currentChannelId === channelId ? 'primary' : 'light'}
      onClick={handleChannelClick}
    >
      {children}
    </Button>
  );
};

export default ChannelButton;
