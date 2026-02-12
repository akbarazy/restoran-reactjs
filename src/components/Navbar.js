import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <FontAwesomeIcon icon={faUtensils} className="me-2" />Restoran
        </h1>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Service
          </NavLink>
          <NavLink to="/menu" className="nav-item nav-link">
            Menu
          </NavLink>

          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Pages
            </span>
            <div className="dropdown-menu m-0">
              <NavLink to="/booking" className="dropdown-item">
                Booking
              </NavLink>
              <NavLink to="/team" className="dropdown-item">
                Our Team
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                Testimonial
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>

        <Link to="/booking" className="btn btn-primary py-2 px-4">
          Book A Table
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
