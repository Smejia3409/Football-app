import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const register = () => {
  interface IFormCred {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }

  const [formCred, setFormCred] = useState<IFormCred>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState<string>("");
  return (
    <Container>
      <Row>
        <Col className="form" md={6}>
          <p className="form-header">Create account</p>
          <Form>
            <Form.Group>
              <Form.Label className="form-input">Firstname</Form.Label>
              <Form.Control
                placeholder="Firstname"
                value={formCred.firstname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormCred({ ...formCred, firstname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-input">Lastname</Form.Label>
              <Form.Control
                placeholder="Lastname"
                value={formCred.lastname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormCred({
                    ...formCred,
                    lastname: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-input">Email</Form.Label>
              <Form.Control
                placeholder="Email"
                value={formCred.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormCred({
                    ...formCred,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-input">Password</Form.Label>
              <Form.Control
                placeholder="Password"
                value={formCred.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormCred({
                    ...formCred,
                    password: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <br />
            <Button className="form-btn">Create account</Button>
            <p className="text-danger">{formError}</p>
          </Form>
        </Col>
        <Col md={6}>
          <img src="" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default register;
