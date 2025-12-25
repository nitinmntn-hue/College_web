import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';
import '../assets/styles/home.scss';

const Home = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-kicker">Your future starts here</p>
            <h1 className="heading">Welcome to College Portal</h1>
            <p className="description">
              Your gateway to academic excellence, vibrant campus life, and a community that believes in your potential.
            </p>

            <p className="hero-paragraph">
              <span>
                &quot;With Ardor and Devotion&quot; is more than a motto.
              </span>
              Aligning who you are with what you do is at the heart of the Bates experience and the foundation of our campus community.
            </p>

            <div className="hero-actions">
              <Button text="Apply for Admission" link="/admission" variant="primary" />
              <Button text="Explore Programs" link="/about" variant="outline" />
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-inner">
              <img src="/hero-campus.jpg" loading="lazy" alt="College campus" />
              <div className="hero-badge">
                <span className="hero-badge-label">Placement Rate</span>
                <span className="hero-badge-value">95% within 6 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional section with scroll-triggered animation example */}
      <FadeInSection>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Why choose us</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            From world-class faculty and research opportunities to clubs, events, and mentorship, our campus is
            designed to help you thrive. Discover a community that celebrates curiosity, collaboration, and
            character.
          </p>
        </div>
      </FadeInSection>
    </main>
  );
};

export default Home;
