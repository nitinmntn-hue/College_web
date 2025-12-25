import React from 'react';
import '../../assets/styles/result.scss';
import Login from '../../components/Login';
import FadeInSection from '../../components/FadeInSection';

const ResultDetals = () => {
  return (
    <div className="resultDetails">
      <FadeInSection>
        <Login />
      </FadeInSection>
    </div>
  )
}

export default ResultDetals