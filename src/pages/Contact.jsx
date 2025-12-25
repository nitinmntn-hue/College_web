import FadeInSection from '../components/FadeInSection';
import '../assets/styles/contact.scss';

const Contact = () => {
  return (
    <main className="main-page">
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 className='heading'>Contact us</h1>
        <FadeInSection>
          <p className='description'>
            Have questions about admissions, programs, or campus life? We&apos;re here to help you find your next
            step.
          </p>
          <p className='description'>
            Email: admissions@example.edu<br />
            Phone: +1 (555) 123-4567
          </p>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Contact;
