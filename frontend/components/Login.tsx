import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/navigation";
const Login = () => {
  interface ICredentials {
    email: string;
    password: string;
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { push } = useRouter();

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

      console.log(login.data);

      if (login.data.username) {
        console.log("login successful");
        document.cookie = `token=${login.data.token}`;
        push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [email, password]);

  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div className="border border-secondry " style={{ width: "100%" }}>
        <p className="form-header">Login</p>
        <Form onSubmit={loginHandler}>
          <Form.Group controlId="email">
            <Form.Control
              className="form-input"
              style={{ width: "100%" }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>

          <Button className="form-btn w-100" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
