import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChannelCreateButton from './components/ChannelCreateButton';
import ChannelList from './components/ChannelList';
import ChatMessages from './components/ChatMessages';
import ChatCreateMessageForm from './components/ChatCreateMessageForm';

const App = () => (
  <Row className="h-100 pb-3">
    <Col className="col-3 border-right">
      <ChannelCreateButton />
      <ChannelList />
    </Col>
    <Col className="h-100">
      <div className="d-flex flex-column h-100">
        <ChatMessages />
        <div className="mt-auto">
          <ChatCreateMessageForm />
        </div>
      </div>
    </Col>
  </Row>
);

export default App;
