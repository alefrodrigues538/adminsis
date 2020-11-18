import React from 'react';
import {
    Container, Row, Col,
    Button
} from 'react-bootstrap'

import './styles.css';

function About() {
    return (
        <Container id="container">
            <Row>
                <Col>
                    <h1>about</h1>
                    <a className="btn btn-primary" href="/">Ir para Home</a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;