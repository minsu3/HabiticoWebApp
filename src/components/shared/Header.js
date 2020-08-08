import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={"/"}>Habitico</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href={"/list"}>Todo</Nav.Link>
            <Nav.Link href={"/quit"}>Quit</Nav.Link>
            <Nav.Link href={"/focus"}>Focus</Nav.Link>
            <Nav.Link href={"/about"} style={{ position: 'absolute', right: '80px' }}>About</Nav.Link>
            <Nav.Link href={"/login"} style={{position: 'absolute', right: '10px'}}>Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </>
  );
}

export default Header 