import React, { useRef, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import cx from 'classnames';
import {
  FormGroup, FormControl, InputGroup, Form, Button,
} from 'react-bootstrap';

import thunks from '../store/messages/thunks';
import AppContext from '../AppContext';
import selectors from '../store/selectors';
import actions from '../store/actions';

const ChatCreateMessageForm = () => {
  const { nickname } = useContext(AppContext);
  const channelId = useSelector(selectors.getCurrentChannelId);
  const error = useSelector(selectors.getAddMessageError);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [channelId]);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }, { setSubmitting, resetForm }) => {
      const attributes = { message, nickname, channelId };
      await dispatch(thunks.addMessageAsync(attributes));
      setSubmitting(false);
      resetForm();
    },
  });

  const handleChange = (event) => {
    if (error) {
      dispatch(actions.resetError({ type: 'addMessage' }));
    }
    formik.handleChange(event);
  };

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <FormGroup>
        <InputGroup>
          <FormControl
            ref={inputRef}
            name="message"
            className={cx('mr-2', { 'is-invalid': error })}
            type="text"
            disabled={formik.isSubmitting}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={handleChange}
          />
          <Button type="submit" className="btn btn-primary">Submit</Button>
          <div className="d-block invalid-feedback">
            {error && error.message}
            &nbsp;
          </div>

        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ChatCreateMessageForm;
