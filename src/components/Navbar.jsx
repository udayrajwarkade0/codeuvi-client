import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth-context.jsx";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header.navbar-container");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-container">
      <div className="logo-brand">
        <NavLink to="/"><span>Code</span>UVI</NavLink>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={menuOpen ? "active" : ""}>
        <ul onClick={() => setMenuOpen(false)}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

          {isLoggedIn ? (
            <>
              <li className="username-text">Hello, {user?.username}</li>
              <li><NavLink to="/logout" className="logout-btn">Logout</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/register" className="logout-btn">Register</NavLink></li>
              <li><NavLink to="/login" className="logout-btn">Login</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
