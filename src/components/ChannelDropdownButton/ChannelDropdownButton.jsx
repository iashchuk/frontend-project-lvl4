import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ChannelButton from '../ChannelButton/ChannelButton';
import selectors from '../../store/selectors';
import ModalInputText from '../Modal/ModalInputText';
import ModalConfirm from '../Modal/ModalConfirm';
import thunks from '../../store/channels/thunks';

const ChannelDropdownButton = ({ channelId, children }) => {
  const [modalType, setModalType] = useState(null);
  const currentChannelId = useSelector(selectors.getCurrentChannelId);
  const dispatch = useDispatch();

  const handleRenameChannel = (name) => {
    dispatch(thunks.renameChannelAsync({ id: channelId, name }));
    setModalType(null);
  };

  const handleRemoveChannel = () => {
    console.log(channelId);
    dispatch(thunks.removeChannelAsync({ id: channelId }));
    setModalType(null);
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
          <Dropdown.Item onClick={() => setModalType('remove')}>
            Remove
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setModalType('rename')}>
            Rename
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {modalType === 'rename' && <ModalInputText title="Rename channel" text={children} onCancel={() => setModalType(null)} onConfirm={handleRenameChannel} />}
      {modalType === 'remove' && <ModalConfirm title="Remove channel" onCancel={() => setModalType(null)} onConfirm={handleRemoveChannel} />}

    </>
  );
};

export default ChannelDropdownButton;
