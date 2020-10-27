import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirm = ({
  title, text, onCancel, onConfirm,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onCancel();
  };

  return (
    <Modal show onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-4">{text}</p>
        <div className="d-flex justify-content-between">
          <Button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</Button>
          <Button type="submit" className="btn btn-danger" onClick={handleConfirm}>Confirm</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

ModalConfirm.defaultProps = {
  text: 'Are you sure?',
};

export default ModalConfirm;
