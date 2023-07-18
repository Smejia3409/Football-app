import Nav from "@/components/Nav";
import { throws } from "assert";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const register = () => {
  interface IFormCred {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const [formCred, setFormCred] = useState<IFormCred>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const { push } = useRouter();

  const handleSumbit = async (event: any) => {
    event.preventDefault();
    setMessage("");

    if (
      formCred.email == "" ||
      formCred.firstName == "" ||
      formCred.lastName == "" ||
      formCred.password == ""
    ) {
      setMessage(" Missing field");
      throw "Missing field";
    }

    try {
      const register = await axios.post(
        "http://localhost:3000/api/register",
        formCred
      );

      console.log(register);

      push("/");
    } catch (error) {
      console.log(error);
      setMessage(
        "An account with this email already exist, please use another email"
      );
    }
  };

  return (
    <>
      <Nav />
      <Container>
        <Row>
          <Col className="form" md={6}>
            <p className="form-header">Create account</p>
            <Form onSubmit={handleSumbit}>
              <Form.Group>
                <Form.Label className="form-input">Firstname</Form.Label>
                <Form.Control
                  placeholder="Firstname"
                  value={formCred.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCred({ ...formCred, firstName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-input">Lastname</Form.Label>
                <Form.Control
                  placeholder="Lastname"
                  value={formCred.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormCred({
                      ...formCred,
                      lastName: e.target.value,
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
              <Button className="form-btn" type="submit">
                Create account
              </Button>
              <p className="text-danger">{message}</p>
            </Form>
          </Col>
          <Col md={6}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default register;
