import React from 'react';
import '../../assets/styles/result.scss';
import Login from '../../components/Login';
import FadeInSection from '../../components/FadeInSection';

const Results = () => {
  return (
    <main className="result-page">
      <FadeInSection >
        <div className="result-container">
          <h1 className="result-heading">View Results</h1>
          <p className="result-description">
            Welcome to the Results Page. Here you can find all the information about your academic performance and achievements.
          </p>
        </div>
          <Login />
      </FadeInSection>

    </main>
  )
}

export default Results