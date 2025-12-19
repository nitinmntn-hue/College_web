import FadeInSection from '../components/FadeInSection';
import '../assets/styles/contact.scss';

const Contact = () => {
  return (
    <main>
      <FadeInSection>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ marginBottom: '1rem' }}>Contact us</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Have questions about admissions, programs, or campus life? We&apos;re here to help you find your next
            step.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Email: admissions@example.edu<br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </FadeInSection>
    </main>
  );
};

export default Contact;
