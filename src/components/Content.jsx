import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>Hello World! 5</Col>
      </Row>
    </Container>
  );
}

export default Content;
