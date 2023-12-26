import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          Personal Webpage of Vasili Nashvilli
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="Home" className="nav-link">
              Home{" "}
            </Link>

            <Link to="Home" className="nav-link">
              About
            </Link>
            <Link to="MyProjects" className="nav-link">
              My Projects{" "}
            </Link>

            <Link
              to="https://github.com/Vasili2797/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub{" "}
            </Link>

            <Link
              to="https://www.linkedin.com/in/vasili-nashvilli-08bb95140/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn{" "}
            </Link>

            <Link
              to="https://drive.google.com/file/d/1SbdxKqy4sT_Xih89vMHgVXDRR87Jm7qp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </Link>

            <Link to="Contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
