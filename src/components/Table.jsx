import React from 'react'

const Table = () => {
    const rows = [
        { id: 1, content: "Home Page", link: "/" },
        { id: 2, content: "About Page", link: "/about" },
        { id: 3, content: "Contact Page", link: "/contact" },
        { id: 4, content: "Sports Section", link: "/sports" },
    ];
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Content</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody> {rows.map((row) => (
                    <tr key={row.id}> <td>{row.id}</td>
                        <td>{row.content}</td> <td>
                            <a href={row.link} className="table-link"> Go </a>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>);
};


export default Table