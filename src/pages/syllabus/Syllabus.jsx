import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/syllabus.scss';

const Syllabus = () => {

    const rows = [{ id: 1, content: "Home Page", link: "/", type: "internal" },
    { id: 2, content: "About Page", link: "/about", type: "internal" },
    { id: 3, content: "Contact Page", link: "/contact", type: "internal" },
    { id: 4, content: "Sports Section", link: "/sports", type: "internal" },
    { id: 5, content: "Admission Form PDF", link: "/files/admission-form.pdf", type: "pdf" },
    { id: 6, content: "Sports Brochure PDF", link: "https://www.eks-intec.com/wp-content/uploads/2025/01/Sample-pdf.pdf", type: "pdf" },
    ];

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
                        <table className="syllabus-table">
                            <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th>Content</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.content}</td>
                                        <td>
                                            {row.type === "internal" ? (
                                                <Link to={row.link} className="table-link">
                                                    Go
                                                </Link>
                                            ) : (
                                                <a href={row.link} target="_blank" rel="noopener noreferrer" className="table-link" >
                                                    View PDF
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Syllabus