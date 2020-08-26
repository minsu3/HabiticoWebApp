import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./header.module.css";

function Header() {
  return (
      <div className={styles.container}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={"/"}>Habitico</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href={"/list"}>Todo</Nav.Link>
            <Nav.Link href={"/quit"}>Quit</Nav.Link>
            <Nav.Link href={"/focus"}>Focus</Nav.Link>
            <Nav.Link href={"/about"} className={styles.about}>About</Nav.Link>
            <Nav.Link href={"/login"} className={styles.signin}>Sign In</Nav.Link>
          </Nav>
        </Navbar>
      </div>
  );
}

export default Header 