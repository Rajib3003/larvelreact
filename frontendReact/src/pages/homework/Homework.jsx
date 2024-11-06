import React, { useState, useEffect } from 'react';
import homeworkImage from '/assets/frontend_assets/img/appointment.jpg';

export default function Homework() {
    const [version, setVersion] = useState('');
    const [className, setClassName] = useState('');
    const [batch, setBatch] = useState('');
    const [date, setDate] = useState('');
    const [homework, setHomework] = useState([]);
    const [filteredHomework, setFilteredHomework] = useState([]); // Filtered Homework state
    const [message, setMessage] = useState('');

    // Fetch Homework from the API
    const handleFetchHomework = async () => {
        try {
            const response = await fetch(`http://localhost:5000/homework?version=${version}&className=${className}&batch=${batch}&date=${date}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log('Fetched Data:', data);  // Log to see the response
            setHomework(data);  // Store fetched data in state
            setMessage(data.length > 0 ? '' : 'No homework found.');
        } catch (error) {
            console.error('Error fetching homework:', error);
            setMessage('Failed to fetch homework.');
        }
    };
    
    // Filter the fetched homework based on selected criteria
    useEffect(() => {
        console.log('testing homework',homework);
        const filtered = homework.filter(item => 
            (version ? item.version === version : true) &&
            (className ? item.className === className : true) &&
            (batch ? item.batch === batch : true) &&
            (date ? item.date.startsWith(date) : true) 
        );
        console.log('Filtered Homework:', filtered); 
        setFilteredHomework(filtered); // Set filtered data
        
    }, [homework, version, className, batch, date]);
    

    // Submit handler for the form
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
                                
{filteredHomework.length === 0 ? (
    <p>No homework available based on the selected filters.</p>
) : (
    filteredHomework.map(item => (
        <div key={item.id}>
            <h3>{item.subject}</h3>
            <p>{item.homework}</p>
            <p>Class: {item.className}, Batch: {item.batch}</p>
            <p>Date: {item.date || 'No Date Available'}</p> {/* Fallback if no date */}
        </div>
    ))
)}



                                {/* Download button */}
                                {filteredHomework.length > 0 && (
                                    <button className="btn btn-success mt-3" onClick={handleDownload}>
                                        Download Homework
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={homeworkImage} style={{ objectFit: 'cover' }} alt="Appointment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
