import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <Container className="App">
            <Row>
                <Col>
                    <h1>Home</h1>
                    <a className="btn btn-primary" href="/about">Ir para About</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;