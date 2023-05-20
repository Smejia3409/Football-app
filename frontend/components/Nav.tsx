import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "@/cookies";

const Nav = () => {
  const [cookie, setCookie] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const router = useRouter();

  const getUsername = async () => {
    try {
      let token = getCookie();

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const u = await axios.get("http://localhost:5000/user/getuser", config);

      setUserName(u.data.firstName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (getCookie()) {
      setCookie(true);
      getUsername();
    }
  }, [cookie, userName]);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">App title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        {cookie ? (
          <IsUser username={userName} />
        ) : (
          <Navbar.Collapse className="justify-content-end">
            <Button
              variant="success"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

const IsUser = (props: { username: string }) => {
  return (
    <Navbar.Collapse className="justify-content-end">
      <p>Welcome {props.username}</p>
    </Navbar.Collapse>
  );
};
export default Nav;
