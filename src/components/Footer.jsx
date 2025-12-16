import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.scss';
import Button from './Button';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are committed to providing quality education and fostering a community of learners.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email:</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email:</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Social Media Links</p>
            <Button text='Contact us' variant='primary' />
            {/* <Button text='Contact us' variant='secondary' />
            <Button text='Contact us' variant='orange' />
            <Button text='Contact                      ' />
            <Button text='Contact us' variant='red' navigateTo='a'/>
            <Button text='Contact us' variant='black' />
            <Button text='Contact us' variant='white' />
            <Button text='Contact us' variant='twitter' />
            <Button text='Contact us' variant='olive' /> */}
          </div>
        </div>
        <div className="copy">
          <p>&copy; {new Date().getFullYear()} College Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer