import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Habitico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/quit">Quit</Nav.Link>
            <Nav.Link href="/focus">Focus</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about" className="mr-sm-2">
              About
            </Nav.Link>
            <Nav.Link href="/quit" className="mr-sm-2">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
