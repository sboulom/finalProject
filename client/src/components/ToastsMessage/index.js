import React, { useState } from "react";
import { Row, Col, Button, Toast } from 'react-bootstrap'


function ToastsMessage() {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
            <Toast.Body>You Added A Beer!</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    );
}

export default ToastsMessage;