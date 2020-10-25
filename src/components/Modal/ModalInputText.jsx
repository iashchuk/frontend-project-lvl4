import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Modal, FormGroup, FormControl, Form, Button,
} from 'react-bootstrap';

const ModalInputText = ({
  title, text, onCancel, onConfirm,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      text: text || '',
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      onConfirm(values.text);
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
          <FormGroup>
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
