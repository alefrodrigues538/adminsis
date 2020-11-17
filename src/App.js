import React from 'react'
import './App.css';

import {Container, Row, Col, Button} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col classname="col-sm">
          <Button variant="primary">Primary</Button>
        </Col>
        <Col classname="col-sm">
          <Button variant="danger">Danger</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
