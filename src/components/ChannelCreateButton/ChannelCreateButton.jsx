import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ModalInputText from '../modals/ModalInputText';
import thunks from '../../store/channels/thunks';

const ChannelCreateButton = () => {
  const [modalIsShow, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddChannel = (name) => {
    dispatch(thunks.addChannelAsync({ name }));
  };

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button className="btn btn-link p-0 ml-auto" type="button" onClick={() => setShowModal(true)}>+</button>
      </div>
      {modalIsShow && <ModalInputText title="Add channel" onCancel={() => setShowModal(false)} onConfirm={handleAddChannel} />}
    </>
  );
};

export default ChannelCreateButton;
