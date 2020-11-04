import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import ChannelButton from './ChannelButton';
import { thunks, actions, selectors } from '../store';
import getModal from './modals';

const channelActions = {
  rename: 'renameChannel',
  remove: 'removeChannel',
};

const getModalErrors = createSelector(
  [selectors.getRenameChannelError, selectors.getRemoveChannelError], (renameErr, removeErr) => ({
    [channelActions.rename]: renameErr?.message,
    [channelActions.remove]: removeErr?.message,
  }),
);

const initialModalState = { type: '', text: '' };

const ChannelDropdownButton = ({ channelId, children }) => {
  const [modalInfo, setModalInfo] = useState(initialModalState);
  const currentChannelId = useSelector(selectors.getCurrentChannelId);
  const modalErrors = useSelector(getModalErrors);
  const dispatch = useDispatch();

  const handleCancel = () => {
    if (modalErrors[modalInfo.action]) {
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

    const modalActions = {
      [channelActions.rename]: handleRenameChannel,
      [channelActions.remove]: handleRemoveChannel,
    };

    return (
      <Modal
        title={modalInfo.title}
        text={modalInfo.text}
        error={modalErrors[modalInfo.action]}
        onCancel={handleCancel}
        onConfirm={modalActions[modalInfo.action]}
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
            type: 'confirm', action: channelActions.remove, title: 'Remove channel',
          })}
          >
            Remove
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setModalInfo({
            type: 'textInput', action: channelActions.rename, title: 'Rename channel', text: children,
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
