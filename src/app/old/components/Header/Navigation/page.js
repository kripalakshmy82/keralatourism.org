'use client'
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
//import { Link } from "react-router-dom";
import Link from "next/link";

import Favourite from "./Favourite";
import Language from "./Language";
import Search from "./Search";
import MegaMenu from './MegaMenu';

const DownArrow = () => <i className="la la-angle-down" />;

const UpArrow = () => <i className="la la-angle-up" />;

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(null);

  useEffect(() => {
    if (toggleMenu) document.body.classList.add("dt-disable-scroll");
    else document.body.classList.remove("dt-disable-scroll");
  }, [toggleMenu]);

  const handleToggleMenu = (type) => {
    if (toggleMenu === type) setToggleMenu(null);
    else setToggleMenu(type);
  };

  return (
    <>
      <Nav className="justify-content-end" as="ul">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/where-to-go">
            Where to go
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            onClick={(e) => {
              e.preventDefault();
              handleToggleMenu("what-to-do");
            }}
          >
            What to do
            {toggleMenu === "what-to-do" ? <UpArrow /> : <DownArrow />}
          </Nav.Link>
          {toggleMenu === "what-to-do" && (
            <MegaMenu title="What to do" toggleMenu={setToggleMenu} />
          )}
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            onClick={(e) => {
              e.preventDefault();
              handleToggleMenu("plan-your-trip");
            }}
          >
            Plan your trip
            {toggleMenu === "plan-your-trip" ? <UpArrow /> : <DownArrow />}
          </Nav.Link>
          {toggleMenu === "plan-your-trip" && (
            <MegaMenu title="Plan your Trip" toggleMenu={setToggleMenu} />
          )}
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/">
            Kerala Tourism
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/">
            Business
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Search />
        <Favourite />
        <Language />
      </Nav>
    </>
  );
};

export default Navigation;
