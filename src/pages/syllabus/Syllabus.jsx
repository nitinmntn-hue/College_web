import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/syllabus.scss';
import Table from '../../components/Table';

const Syllabus = () => {

    

    return (
        <>
            <main className="syllabus-page">
                <div className="syllabus-container">
                    <div className="syllabus-header">
                        <h1>Course Syllabus</h1>
                        <p>Explore the detailed syllabus for our courses, including topics, objectives, and assessment methods.</p>
                    </div>
                    {/* Table content */}
                    <section className="syllabus-section">
                        <Table />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Syllabus