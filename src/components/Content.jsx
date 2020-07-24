import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';

function Content() {
  return (
    <div className="h-75 d-flex flex-column justify-content-center align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs="10" sm="6">
            <Login />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
