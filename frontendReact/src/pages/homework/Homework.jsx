import React, { useState } from 'react';

export default function Homework() {
    const [version, setVersion] = useState('');
    const [className, setClassName] = useState('');
    const [batch, setBatch] = useState('');
    const [date, setDate] = useState('');
    const [homework, setHomework] = useState([]);
    const [message, setMessage] = useState('');

    const handleFetchHomework = async () => {
        try {
            const response = await fetch(`http://localhost:5000/homework?version=${version}&class=${className}&batch=${batch}&date=${date}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setHomework(data);
            setMessage(data.length > 0 ? '' : 'No homework found.');
        } catch (error) {
            console.error('Error fetching homework:', error);
            setMessage('Failed to fetch homework.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFetchHomework();
    };

    // Download function
    const handleDownload = async () => {
        try {
            const response = await fetch(`http://localhost:5000/homework/download?version=${version}&class=${className}&batch=${batch}&date=${date}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                }
            });
            if (!response.ok) throw new Error('Error downloading homework');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'homework.xlsx';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading homework:', error);
        }
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">Homework</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        {/* Dropdowns for filters */}
                                        <div className="col-sm-6">
                                            <label htmlFor="version">Version</label>
                                            <select className="form-select border-0" id="version" value={version} onChange={(e) => setVersion(e.target.value)}>
                                                <option value="" disabled>Select Version</option>
                                                <option value="Bangla">Bangla</option>
                                                <option value="English">English</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="class">Class</label>
                                            <select className="form-select border-0" id="class" value={className} onChange={(e) => setClassName(e.target.value)}>
                                                <option value="" disabled>Select Class</option>
                                                <option value="One">One</option>
                                                <option value="Two">Two</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="batch">Batch</label>
                                            <select className="form-select border-0" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)}>
                                                <option value="" disabled>Select Batch</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="date">Date</label>
                                            <input type="date" className="form-control border-0" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Fetch Homework</button>
                                        </div>
                                    </div>
                                </form>

                                {/* Message for no data */}
                                {message && <p className="mt-3">{message}</p>}

                                {/* Homework table */}
                                {homework.length > 0 && (
                                    <table className="table mt-4">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Due Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {homework.map(item => (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.dueDate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}

                                {/* Download button */}
                                {homework.length > 0 && (
                                    <button className="btn btn-success mt-3" onClick={handleDownload}>
                                        Download Homework
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="assets/frontend_assets/img/appointment.jpg" style={{ objectFit: 'cover' }} alt="Appointment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
