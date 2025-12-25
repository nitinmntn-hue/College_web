import React from 'react';
import '../../assets/styles/result.scss';
import Login from '../../components/Login';
import FadeInSection from '../../components/FadeInSection';

const Results = () => {
  return (
    <main className="main-page">
      <div className="result-container">
        <h1 className="heading">View Results</h1>
        <p className="description">
          Welcome to the Results Page. Here you can find all the information about your academic performance and achievements.
        </p>
      </div>
      <div>
        <FadeInSection >
          <Login />
        </FadeInSection>
      </div>


    </main>
  )
}

export default Results