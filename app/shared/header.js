import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Habitico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ marginLeft: "10px" }} href="/todo-list">
              Todo List
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "10px" }} href="/habit-tracker">
              Habit Tracker
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "10px" }} href="/pomodoro">
              Pomodoro
            </Nav.Link>
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
