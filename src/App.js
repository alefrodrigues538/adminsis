import React from 'react'
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Routes from './pages/Routes';

import Navbar from './Layout/navbar';

function App() {
  return (
    <Container>
      <Row>
        <Col classname="col-md-2">
          <Navbar/>
        </Col>
        <Col classname="col-md-10">
          <Routes/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
