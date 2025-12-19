import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from "react";
import './global.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loading';

const About = React.lazy(() => import('./pages/About'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Sports = React.lazy(() => import("./pages/Sports"));
const SportsDetails = React.lazy(() => import("./pages/SportsDetails"));

function App() {
  return (
    <div className="app">
      {/* Parallax background layers */}
      <div className="parallax-bg" />
      <div className="parallax-overlay" />

      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sports/:id" element={<SportsDetails />} />
              <Route path="/sports" element={<Sports />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
