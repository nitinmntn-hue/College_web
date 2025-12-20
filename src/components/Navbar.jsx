import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.scss';

const Navbar = () => {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.body.classList.contains('dark')
      : false
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-mark">CP</span>
          <span className="logo-text">College Portal</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* Academics */}
          <NavLink to="/academic">Academic</NavLink>
          <NavLink to="/faculty_info">Faculty Info</NavLink>
          <NavLink to="/calender">Calender</NavLink>
          <NavLink to="/syllabus">Syllabus</NavLink>
          <NavLink to="/course">Course</NavLink>
          <NavLink to="/results">Results</NavLink>
          <NavLink to="/career">Career</NavLink>
          {/* Award */}
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/disclosure">Disclosure</NavLink>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDark((prev) => !prev)}
        >
          <span className="theme-toggle-icon">
            {dark ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
























// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const Navlinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const Droplinks = [
//     {
//       name: 'Admission 1',
//       subname: [
//         { name: "Undergraduate", path: "/admission1/undergraduate" },
//         { name: "Postgraduate", path: "/admission1/postgraduate" },
//         { name: "PhD", path: "/admission1/phd" },
//         { name: "International", path: "/admission1/international" },
//       ]
//     },
//     {
//       name: 'Admission 2',
//       subname: [
//         { name: "Engineering", path: "/admission2/engineering" },
//         { name: "Medical", path: "/admission2/medical" },
//         { name: "Law", path: "/admission2/law" },
//         { name: "Arts", path: "/admission2/arts" },
//       ]
//     },
//     // Add more dropdowns as needed
//   ];

//   return (
//     <nav className='navbar'>
//       <h1>College Website</h1>
//       <div className='nav-links'>
//         {/* Main Nav Links */}
//         <ul className='nav-links-1'>
//           {Navlinks.map((link, index) => (
//             <li key={index}>
//               <Link to={link.path}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* Dropdown Links */}
//         <ul className='nav-links-2'>
//           {Droplinks.map((link, index) => (
//             <li key={index} className='dropdown'>
//               <p>{link.name}</p>
//               <ul className='dropdown-links'>
//                 {link.subname.map((sub, subIndex) => (
//                   <li key={subIndex}>
//                     <Link to={sub.path}>{sub.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;
