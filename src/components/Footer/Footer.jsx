import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Services */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>App Development</li>
            <li>Web Development</li>
            <li>Logo Design</li>
            <li>UI/UX Design</li>
            <li>Video Editing</li>
          </ul>
        </div>

        {/* Quick Navigation */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/codeuvi?igsh=MWdpNWRuNnB1OWEwYw==&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/udayraj-warkade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/udayrajwarkade0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> {/* YouTube icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Codeuvi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

