import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirm = ({
  title, text, error, onCancel, onConfirm,
}) => (
  <Modal show onHide={onCancel}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className="mb-0">{text}</p>
      <div className="d-block invalid-feedback mt-0 mb-2">
        {error || ''}
            &nbsp;
      </div>
      <div className="d-flex justify-content-between">
        <Button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" className="btn btn-danger" onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal.Body>
  </Modal>
);

ModalConfirm.defaultProps = {
  text: 'Are you sure?',
};

export default ModalConfirm;
