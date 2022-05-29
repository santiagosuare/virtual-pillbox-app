import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaUser, FaCalendarAlt, FaFileExport } from "react-icons/fa";
import { CgPill } from "react-icons/cg";
import { Col, Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Nav className="me-auto">
          <Container>
            <Row md={5}>
              <Col>
                <Nav.Link href="/">
                  <BsFillHouseDoorFill size={33} />
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href="/User">
                  <FaUser size={33} />
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href="/Medicina">
                  <CgPill size={33} />
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href="/Calendario">
                  <FaCalendarAlt size={33} />
                </Nav.Link>
              </Col>

              <Col>
                <Nav.Link href="/Export">
                  <FaFileExport size={33} />
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
