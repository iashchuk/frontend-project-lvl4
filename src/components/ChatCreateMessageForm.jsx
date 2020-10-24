// @ts-check

import React from 'react';

const ChatCreateMessageForm = () => (
  <form noValidate>
    <div className="form-group">
      <div className="input-group">
        <input
          name="body"
          className="mr-2 form-control"
          value=""
          onChange={(f) => f}
        />
        <button aria-label="submit" type="submit" className="btn btn-primary">Submit</button>
        <div className="d-block invalid-feedback">&nbsp;</div>
      </div>
    </div>
  </form>
);

export default ChatCreateMessageForm;
