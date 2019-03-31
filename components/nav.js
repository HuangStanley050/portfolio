import React, { Component } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Stanley's Portfolio</NavbarBrand>
          <NavbarToggler onClick />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  {" "}
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
