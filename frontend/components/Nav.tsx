import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">App title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

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
      </Container>
    </Navbar>
  );
};

export default Nav;
