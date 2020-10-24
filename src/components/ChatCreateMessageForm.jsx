// @ts-check

import React, { useContext } from 'react';
import UserContext from '../UserContext';

const ChatCreateMessageForm = () => {
  const userName = useContext(UserContext);

  console.log(userName);
  return (
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
};

export default ChatCreateMessageForm;
