import FadeInSection from '../components/FadeInSection';
import '../assets/styles/about.scss';

const About = () => {
  return (
    <main className="main-page">
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 className='heading'>About the College Portal</h1>
        <FadeInSection>
          <p className='description'>
            The College Portal is designed to centralize everything related to your academic journey: admissions,
            academics, campus life, and support. Our goal is to make your experience intuitive, transparent, and
            empowering from day one.
          </p>
        </FadeInSection>
      </div>
    </main>
  );
};

export default About;
