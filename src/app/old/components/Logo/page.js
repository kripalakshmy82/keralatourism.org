import React from "react";
import { NavbarBrand } from "react-bootstrap";
//import { Link } from "react-router-dom";
import Link from "next/link";

import logoImg from "./logo.png";

const Logo = () => {
  return (
    <NavbarBrand as={Link} to="/" className="logo mx-0 py-0">
      <h1 className="p-0 mb-0">
        <img className="img-fluid" src={logoImg} alt="Kerala-Tourism" />
      </h1>
    </NavbarBrand>
  );
};

export default Logo;
