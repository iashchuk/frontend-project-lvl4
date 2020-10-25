import React from 'react';
import {
  Modal, Button,
} from 'react-bootstrap';

const ModalConfirm = ({
  title, onCancel, onConfirm,
}) => (
  <Modal
    show
    onHide={onCancel}
  >
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className="mb-4">Are you sure?</p>
      <div className="d-flex justify-content-between">
        <Button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" className="btn btn-danger" onClick={onConfirm}>Confirm</Button>
      </div>

    </Modal.Body>
  </Modal>
);

export default ModalConfirm;
