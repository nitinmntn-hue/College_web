import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/syllabus.scss';
import Table from '../../components/Table';
import FadeInSection from '../../components/FadeInSection';

const Syllabus = () => {



    return (
        <>
            <main className="syllabus-page">
                <div className="syllabus-container">
                    <div className="syllabus-header">
                        <h1 className='heading'>Course Syllabus</h1>
                        <p className='description'>Explore the detailed syllabus for our courses, including topics, objectives, and assessment methods.</p>
                    </div>
                    <FadeInSection>
                        {/* Table content */}
                        <section className="syllabus-section">
                            <Table />
                        </section>
                    </FadeInSection>
                </div>

            </main>
        </>
    )
}

export default Syllabus