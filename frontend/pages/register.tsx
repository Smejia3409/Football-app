import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const register = () => {
  return (
    <Container>
      <Row>
        <Col className="form" md={8}>
          <h2>Create account</h2>
          <Form>
            <Form.Group>
              <Form.Label>Firstname</Form.Label>
              <Form.Control placeholder="Firstname" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lastname</Form.Label>
              <Form.Control placeholder="Lastname" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" />
            </Form.Group>
            <br />
            <Button>Create account</Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default register;
