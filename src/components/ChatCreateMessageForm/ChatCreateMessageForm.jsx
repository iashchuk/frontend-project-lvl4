import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { addMessageAsync } from '../../store/messages/async/addMessageAsync';
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
      dispatch(addMessageAsync(attributes));
      setSubmitting(false);
      resetForm();
    },
  });

  console.log(formik.values.message);
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            name="message"
            className="mr-2 form-control"
            disabled={formik.isSubmitting}
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <button aria-label="submit" type="submit" className="btn btn-primary">Submit</button>
          <div className="d-block invalid-feedback">&nbsp;</div>
        </div>
      </div>
    </form>
  );
};

export default ChatCreateMessageForm;
