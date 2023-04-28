import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">App title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Button variant="success">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
