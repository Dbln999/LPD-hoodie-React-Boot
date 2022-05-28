import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Col, NavDropdown, Nav, Image } from "react-bootstrap";
import logo from '../images/logo.png'
export const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg={"dark"}  variant={"dark"}>
      <Container height={'70'}>
        <Col md={"9"}>
          <Navbar.Brand>
              <Image src={logo} height={'60'}></Image>

          </Navbar.Brand>
        </Col>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse id={'collapse-menu'}>
          <Col md={"3"}>
            <Nav >
              <Nav.Link href={'#'} id={'navLinks'}>FAQ</Nav.Link>
              <Nav.Link href={'#'} id={'navLinks'}>About</Nav.Link>
              <NavDropdown title={"EN"} id={'navLinks'}>
                <NavDropdown.Item href={'#'}>EST</NavDropdown.Item>
                <NavDropdown.Item href={'#'}>RUS</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
