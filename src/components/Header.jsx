import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/style.css";


function Header() {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-5">
          <Link className="text-white nav-link" to="/">
            Movie-Wiki
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
              <Link className="nav-link" to="/search">
                Search
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;