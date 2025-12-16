import React from 'react';
import Button from '../components/Button';
import '../assets/styles/home.scss';
import Slider from '../components/slider/Slider';
import Slider2 from '../components/slider/Slider2';

const Home = () => {
  return (
    <>
      <section>
        <div className="home">
          <h1 className='home-heading'>Welcome to College Portal</h1>
          <p>Your gateway to academic excellence and campus life.</p>

          <p className='home-paragraph'>
            <span>
              The Bates College motto, "With Ardor and Devotion," encapsulates the spirit of our community.
            </span>
            Aligning who you are with what you do is the heart of the Bates experience.
          </p>
          <Button text="Apply to Admission" link="/admission" />

        </div>

        <Slider />
        <Slider2 />
      </section>
    </>
  )
}

export default Home;