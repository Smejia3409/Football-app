import React, { useState } from "react";
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

    try {
      const login = await axios.post(
        "http//localhost:5000/user/login",
        credentials
      );

      if (!login) {
        console.log("login error");
      }

      console.log("login successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Login hello</p>
      <Form onSubmit={loginHandler}>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
