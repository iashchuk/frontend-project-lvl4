import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import ChannelButton from './ChannelButton';
import { thunks, actions, selectors } from '../store';
import getModal from './modals';

const getModalErrors = createSelector(
  [selectors.getRenameChannelError, selectors.getRemoveChannelError], (renameErr, removeErr) => ({
    renameChannel: renameErr?.message,
    removeChannel: removeErr?.message,
  }),
);

const initialModalState = { type: '', text: '' };

const ChannelDropdownButton = ({ channelId, children }) => {
  const [modalInfo, setModalInfo] = useState(initialModalState);
  const currentChannelId = useSelector(selectors.getCurrentChannelId);
  const errors = useSelector(getModalErrors);
  const dispatch = useDispatch();

  const handleCancel = () => {
    if (errors[modalInfo.action]) {
      dispatch(actions.resetError({ type: modalInfo.action }));
    }
    setModalInfo(initialModalState);
  };

  const handleRenameChannel = async (name) => {
    const { error } = await dispatch(thunks.renameChannelAsync({ id: channelId, name }));
    if (!error) {
      handleCancel();
    }
  };

  const handleRemoveChannel = async () => {
    const { error } = await dispatch(thunks.removeChannelAsync({ id: channelId }));
    if (!error) {
      handleCancel();
    }
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
        error={errors[modalInfo.action]}
        onCancel={handleCancel}
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
          <Dropdown.Item onClick={() => setModalInfo({
            type: 'confirm', action: 'removeChannel', title: 'Remove channel', onConfirm: handleRemoveChannel,
          })}
          >
            Remove
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setModalInfo({
            type: 'textInput', action: 'renameChannel', title: 'Rename channel', text: children, onConfirm: handleRenameChannel,
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
