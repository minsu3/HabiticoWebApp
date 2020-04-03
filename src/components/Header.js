import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={"/home"}>Habitico</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href={"/todo"}>Todo List</Nav.Link>
            <Nav.Link href={"/habit"}>Habits</Nav.Link>
            <Nav.Link href={"/about"}>About Us</Nav.Link>
            <Nav.Link href={"/login"}>Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </>
  );
}

export default Header 