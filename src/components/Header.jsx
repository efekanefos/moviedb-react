import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-5">
          <Link className="text-white nav-link" to="/">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto me-5">
              <Link className="nav-link" to="/">
                PopularMovies
              </Link>
              <Link className="nav-link" to="/nowplaying">
                NowPlaying
              </Link>
              <Link className="nav-link" to="/upcoming">
                Upcoming
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;