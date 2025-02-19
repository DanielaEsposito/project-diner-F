import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        scrolled ? "navbar-scrolled" : ""
      } navbar-color`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className="nav-link active"
                aria-current="page"
              >
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/menu"} className="nav-link">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/events"}>
                Eventi
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
