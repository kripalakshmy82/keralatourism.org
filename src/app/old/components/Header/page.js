import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../Logo/page";


import Navigation from "./Navigation/page";

const Header = () => {
  return (
    <header id="header" className={`w-100`}>
      <Navbar bg="transparent" expand="lg">
        <Container fluid className="px-5 mob-px-2">
          <Logo />
          {/* <Navbar.Toggle aria-controls="header-navbar-nav" className="border-0" /> 
          <Navbar.Collapse id="header-navbar-nav" className="justify-content-end">*/}
            <Navigation />
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
