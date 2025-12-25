import React from 'react';
import '../../assets/styles/syllabus.scss';
import Table from '../../components/Table';
import FadeInSection from '../../components/FadeInSection';

const TimeTable = () => {
    return (
        <div>
            <main className="syllabus-page">
                <div className="syllabus-container">
                    <div className="syllabus-header">
                        <h1 className='heading'>Time Table</h1>
                        <p className='description'>Explore the detailed timetable for our courses, including class schedules and important dates.</p>
                    </div>
                    {/* Table content */}
                    <FadeInSection>
                        <section className="syllabus-section">
                            {/* Table component can be added here in the future */}
                            <Table />
                        </section>
                    </FadeInSection>
                </div>
            </main>
        </div>
    )
}

export default TimeTable