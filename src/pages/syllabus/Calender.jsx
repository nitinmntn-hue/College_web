import React from 'react';
import '../../assets/styles/syllabus.scss';
import Table from '../../components/Table';
import FadeInSection from '../../components/FadeInSection';

const Calender = () => {
    return (
        <div>
            <main className="syllabus-page">
                <div className="syllabus-container">
                    <div className="syllabus-header">
                        <h1 className='heading'>Calender</h1>
                        <p className='description'>Stay updated with our academic calendar, featuring important dates, holidays, and events throughout the year.</p>
                    </div>
                    <FadeInSection>
                        {/* Calender content */}
                        <section className="syllabus-section">
                            {/* Future calender component can be added here */}
                            <Table />
                        </section>
                    </FadeInSection>
                </div>

            </main>
        </div>
    )
}

export default Calender