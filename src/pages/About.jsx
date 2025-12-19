import FadeInSection from '../components/FadeInSection';
import '../assets/styles/about.scss';

const About = () => {
  return (
    <main>
      <FadeInSection>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>About the College Portal</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            The College Portal is designed to centralize everything related to your academic journey: admissions,
            academics, campus life, and support. Our goal is to make your experience intuitive, transparent, and
            empowering from day one.
          </p>
        </div>
      </FadeInSection>
    </main>
  );
};

export default About;
