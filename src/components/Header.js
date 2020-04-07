import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={"/habitico-fe"}>Habitico</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href={"/list"}>Todo List</Nav.Link>
            <Nav.Link href={"/quitthat"}>Quit Bad Habits</Nav.Link>
            <Nav.Link href={"/about"} style={{ position: 'absolute', right: '80px' }}>About</Nav.Link>
            <Nav.Link href={"/login"} style={{position: 'absolute', right: '10px'}}>Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </>
  );
}

export default Header 