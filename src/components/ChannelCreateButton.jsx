import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ModalInputText from './modals/ModalInputText';
import { thunks, actions, selectors } from '../store';

const ChannelCreateButton = () => {
  const [modalIsShow, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const modalError = useSelector(selectors.getAddChannelError);

  const handleCancelAdd = () => {
    if (modalError) {
      dispatch(actions.resetError({ type: 'addChannel' }));
    }
    setShowModal(false);
  };

  const handleAddChannel = async (name) => {
    const { error } = await dispatch(thunks.addChannelAsync({ name }));
    if (!error) {
      handleCancelAdd();
    }
  };

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button className="btn btn-link p-0 ml-auto" type="button" onClick={() => setShowModal(true)}>+</button>
      </div>
      {modalIsShow && <ModalInputText title="Add channel" error={modalError?.message} onCancel={handleCancelAdd} onConfirm={handleAddChannel} />}
    </>
  );
};

export default ChannelCreateButton;
