import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar = () => {
  const Navlinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const Droplinks = [
    {
      name: 'Admission 1',
      subname: [
        { name: "Undergraduate", path: "/admission1/undergraduate" },
        { name: "Postgraduate", path: "/admission1/postgraduate" },
        { name: "PhD", path: "/admission1/phd" },
        { name: "International", path: "/admission1/international" },
      ]
    },
    {
      name: 'Admission 2',
      subname: [
        { name: "Engineering", path: "/admission2/engineering" },
        { name: "Medical", path: "/admission2/medical" },
        { name: "Law", path: "/admission2/law" },
        { name: "Arts", path: "/admission2/arts" },
      ]
    },
    // Add more dropdowns as needed
  ];

  return (
    <nav className='navbar'>
      <h1>College Website</h1>
      <div className='nav-links'>
        {/* Main Nav Links */}
        <ul className='nav-links-1'>
          {Navlinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Dropdown Links */}
        <ul className='nav-links-2'>
          {Droplinks.map((link, index) => (
            <li key={index} className='dropdown'>
              <p>{link.name}</p>
              <ul className='dropdown-links'>
                {link.subname.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
