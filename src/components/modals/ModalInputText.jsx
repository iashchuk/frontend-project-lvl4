import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Modal, FormGroup, FormControl, Form, Button,
} from 'react-bootstrap';

const ModalInputText = ({
  title, text, error, onCancel, onConfirm,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.select();
    throw new Error('Modal error! Its work');
  }, []);

  const formik = useFormik({
    initialValues: {
      text: text || '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      await onConfirm(values.text);
      setSubmitting(false);
    },
  });

  return (
    <Modal
      show
      onHide={onCancel}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup className="mb-0">
            <FormControl
              ref={inputRef}
              name="text"
              type="text"
              disabled={formik.isSubmitting}
              value={formik.values.text}
              required
              onChange={formik.handleChange}
            />
          </FormGroup>
          <div className="d-block invalid-feedback mb-1">
            {error || ''}
            &nbsp;
          </div>
          <div className="d-flex justify-content-end">
            <Button type="button" className="btn btn-secondary mr-2" onClick={onCancel}>Cancel</Button>
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalInputText;
