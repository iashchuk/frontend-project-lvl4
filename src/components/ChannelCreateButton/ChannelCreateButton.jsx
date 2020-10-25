import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import ModalInputText from '../Modal/ModalInputText';
import AppContext from '../../AppContext';
import thunks from '../../store/channels/thunks';

const ChannelCreateButton = () => {
  const { nickname } = useContext(AppContext);
  const [modalIsShow, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddChannel = (name) => {
    dispatch(thunks.addChannelAsync({ name, nickname }));
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <button className="btn btn-link p-0 ml-auto" type="button" onClick={() => setShowModal(true)}>+</button>
      </div>

      {modalIsShow && <ModalInputText title="Rename channel" onCancel={() => setShowModal(false)} onConfirm={handleAddChannel} />}
    </>
  );
};

export default ChannelCreateButton;
