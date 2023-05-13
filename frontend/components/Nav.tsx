import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import axios, { HeadersDefaults } from "axios";

const Nav = () => {
  const [cookie, setCookie] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const router = useRouter();

  const getCookie = () => {
    let cookie: any = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie;
  };

  const getUsername = async () => {
    let token = getCookie().token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const u = await axios.get("http://localhost:5000/user/getuser", config);

    console.log(u);
    setUserName(u.data.firstName);
  };

  useEffect(() => {
    if (getCookie()) {
      setCookie(true);
      getUsername();
      console.log(userName);
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
