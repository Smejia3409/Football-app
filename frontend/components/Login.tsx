import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  interface ICredentials {
    email: string;
    password: string;
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = async (e: any) => {
    const credentials: ICredentials = {
      email: email,
      password: password,
    };

    e.preventDefault();

    console.log(credentials);

    try {
      const login = await axios.post(
        "http://localhost:5000/user/login",
        credentials
      );

      console.log(login);

      console.log("login successful");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div>
      <p>Login hello world</p>
      <Form onSubmit={loginHandler}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
