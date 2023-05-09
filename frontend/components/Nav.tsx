import { redirect } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";

const Nav = () => {
  const [cookie, setCookie] = useState<boolean>(false);

  const router = useRouter();

  const getCookie = () => {
    let cookie: any = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie;
  };

  useEffect(() => {
    if (getCookie()) {
      setCookie(true);
    }
  }, [cookie]);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">App title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        {!cookie ? (
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
        ) : (
          <IsUser />
        )}
      </Container>
    </Navbar>
  );
};

const IsUser = () => {
  return (
    <Navbar.Collapse className="justify-content-end">
      <p>UserName</p>
    </Navbar.Collapse>
  );
};
export default Nav;
