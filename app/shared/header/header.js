import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Habitico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/todo-list">To-do List</Nav.Link>
            <Nav.Link href="/habit-tracker">Habit Tracker</Nav.Link>
            <Nav.Link href="/focus">Focus</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about" className="mr-sm-2">
              About
            </Nav.Link>
            <Nav.Link href="/sign-in" className="mr-sm-2">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
