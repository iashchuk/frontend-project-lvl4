import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import ChannelButton from '../ChannelButton/ChannelButton';
import selectors from '../../store/selectors';
import thunks from '../../store/channels/thunks';
import getModal from '../modals';

const initialModalState = { type: '', text: '' };

const ChannelDropdownButton = ({ channelId, children }) => {
  const [modalInfo, setModalInfo] = useState(initialModalState);
  const currentChannelId = useSelector(selectors.getCurrentChannelId);
  const dispatch = useDispatch();

  const handleRenameChannel = (name) => {
    dispatch(thunks.renameChannelAsync({ id: channelId, name }));
  };

  const handleRemoveChannel = () => {
    dispatch(thunks.removeChannelAsync({ id: channelId }));
  };

  const renderModal = (type) => {
    if (!type) {
      return null;
    }

    const Modal = getModal(type);

    return (
      <Modal
        title={modalInfo.title}
        text={modalInfo.text}
        onCancel={() => setModalInfo(initialModalState)}
        onConfirm={modalInfo.onConfirm}
      />
    );
  };

  return (
    <>
      <Dropdown as={ButtonGroup} className="d-flex">
        <ChannelButton channelId={channelId}>{children}</ChannelButton>
        <Dropdown.Toggle
          split
          variant={currentChannelId === channelId ? 'primary' : 'light'}
        />
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setModalInfo({ type: 'confirm', title: 'Remove channel', onConfirm: handleRemoveChannel })}>
            Remove
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setModalInfo({
            type: 'textInput', title: 'Rename channel', text: children, onConfirm: handleRenameChannel,
          })}
          >
            Rename
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {renderModal(modalInfo.type)}
    </>
  );
};

export default ChannelDropdownButton;
