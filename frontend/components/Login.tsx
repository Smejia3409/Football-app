import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "./Loading";
import { emptyStr } from "@/jsFunctions";

const Login = () => {
  interface ICredentials {
    email: string;
    password: string;
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const { push } = useRouter();

  const loginHandler = async (e: any) => {
    const credentials: ICredentials = {
      email: email,
      password: password,
    };

    e.preventDefault();
    setLoad(true);

    if (emptyStr(credentials.email) || emptyStr(credentials.password)) {
      setMessage("Please fill in all fields");
      setLoad(false);
      throw "Please fill in all fields";
    }

    try {
      setLoad(true);
      const login = await axios.post(
        "http://localhost:3000/api/user",
        credentials
      );

      console.log(login.data);
      if (login.data.message === "Invaild credientials, please try again") {
        setLoad(false);
        setMessage("Incorrect credentials, please try again");

        throw new Error("Incorrect credentials, please try again");
      }

      if (login.data.username) {
        console.log("login successful");
        document.cookie = `token=${login.data.token}`;
        push("/home");
      }
    } catch (error) {
      setLoad(false);
      console.log(error);
      console.log("Login fail");
      setMessage("Incorrect credentials, please try again");
    }
  };

  useEffect(() => {}, [email, password]);

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="">
          <p className="form-header">Login</p>

          <Form onSubmit={loginHandler} className="login-form">
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
            {load && <LoadingScreen />}
          </Form>
          <p className="text-danger">{message}</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
