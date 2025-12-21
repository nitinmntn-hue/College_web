import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/styles/Footer.scss';
import Button from './Button';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-section">
              <h4>About Us</h4>
              <p>We are committed to providing quality education and fostering a community of learners.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="navbar-links">
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/sports">Sports</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
              </div>

            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <p>Social Media Links</p>
              <Button text='Contact us' variant='primary' />
            </div>
          </div>

          <div className="copy">
            <p>&copy; {new Date().getFullYear()} College Name. All rights reserved.</p>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer