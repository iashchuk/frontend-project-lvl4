import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  FormGroup, FormControl, InputGroup, Form, Button,
} from 'react-bootstrap';

import thunks from '../../store/messages/thunks';
import AppContext from '../../AppContext';
import selectors from '../../store/selectors';

const ChatCreateMessageForm = () => {
  const { nickname } = useContext(AppContext);
  const channelId = useSelector(selectors.getCurrentChannelId);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }, { setSubmitting, resetForm }) => {
      const attributes = { message, nickname, channelId };
      dispatch(thunks.addMessageAsync(attributes));
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <FormGroup>
        <InputGroup>
          <FormControl
            name="message"
            className="mr-2"
            type="text"
            disabled={formik.isSubmitting}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <Button type="submit" className="btn btn-primary">Submit</Button>
          <div className="d-block invalid-feedback">&nbsp;</div>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ChatCreateMessageForm;
