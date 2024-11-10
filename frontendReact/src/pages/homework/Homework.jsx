import React, { useState } from 'react';
import homeworkImage from '/assets/frontend_assets/img/appointment.jpg';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Homework() {
    const [version, setVersion] = useState('');
    const [className, setClassName] = useState('');
    const [batch, setBatch] = useState('');
    const [date, setDate] = useState('');
    const [homework, setHomework] = useState([]);
    const [filteredHomework, setFilteredHomework] = useState([]); // Filtered Homework state
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();
    // Fetch Homework from the API
    const handleFetchHomework = async () => {
        if (!version || !className || !batch || !date) {
            setErrorMessage('Please select all filters (Version, Class, Batch, and Date)');
            return;
        }

        // Reset error message if validation passes
        setErrorMessage('');
        try {
            const response = await fetch(`http://localhost:5000/homework?version=${version}&className=${className}&batch=${batch}&date=${date}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setHomework(data);  // Store fetched data in state
            filterHomework(data); // Call filtering function after fetching data
        } catch (error) {
            console.error('Error fetching homework:', error);
            setMessage('Failed to fetch homework.');
        }
    };

    // Filter the fetched homework based on selected criteria
    const filterHomework = (homeworkData) => {
        const filtered = homeworkData.filter(item => 
            (version ? item.version === version : true) &&
            (className ? item.className === className : true) &&
            (batch ? item.batch === batch : true) &&
            (date ? item.date.startsWith(date) : true) 
        );
        setFilteredHomework(filtered); // Set filtered data
        setMessage(filtered.length > 0 ? '' : 'No homework available based on the selected filters.');
    };

    // Submit handler for the form
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
        handleFetchHomework(); // Fetch and filter homework data
    };

    // Download function
    // const handleDownload = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/homework/download?version=${version}&class=${className}&batch=${batch}&date=${date}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    //             }
    //         });
    //         if (!response.ok) throw new Error('Error downloading homework');
    
    //         const blob = await response.blob();
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.style.display = 'none';
    //         a.href = url;
    //         a.download = `homework_${date}.xlsx`;
    //         document.body.appendChild(a);
    //         a.click();
    //         window.URL.revokeObjectURL(url);
    //         document.body.removeChild(a);
    //     } catch (error) {
    //         console.error('Error downloading homework:', error);
    //     }
    // };
    const handleDownload = async () => {
        if (!date) {
            alert('Please select a date before downloading.');
            return;
        }
    
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
            a.download = `homework_${date}.xlsx`;
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
                                <h1 className="mb-4">{t('homework')}</h1>
                                {errorMessage && (
                                <div  class="alert alert-danger alert-dismissible fade show mb-2" role="alert">                                    
                                    <div class="d-flex align-items-start">
                                        <div class="flex-grow-1">
                                        <p class="mb-0">{errorMessage}</p>
                                        </div>
                                        <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    </div>
                                    )}
                                {message && (
                                <div  class="alert alert-danger alert-dismissible fade show mb-2" role="alert" >                                    
                                    <div class="d-flex align-items-start">
                                        <div class="flex-grow-1">
                                        <p class="mb-0">{message}</p>
                                        </div>
                                        <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    </div>
                                    )}  
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">                                        
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
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
                            <div className='card' style={{ minHeight: '400px', maxHeight:'500px', overflowY: 'auto' }}>
                                <div className='card-header'>
                                    <div className="row">                                        
                                        <div className="col">
                                            Date: {filteredHomework.map(item => (item.date || 'No Date Available'))}
                                        </div>
                                        <div className="col">
                                            Day: 
                                        </div>
                                        <div className="col text-end">                                                
                                            <button className="btn btn-success" onClick={handleDownload} disabled={!date}>
                                                Download
                                            </button>                                          
                                        </div>                                    
                                    </div>                                    
                                </div>
                                <div className='card-body'>
                                {filteredHomework.map(item => (
                                        <div key={item.id}>
                                            <h3>{item.subject}</h3>
                                            <p>{item.homework}</p>
                                            <p>Class: {item.className}, Batch: {item.batch}</p>
                                            <p>Date: {item.date || 'No Date Available'}</p> {/* Fallback if no date */}
                                        </div>
                                    ))}

                                        
                                </div>
                                {/* <div className="position-relative h-100">
                                
                                    <img className="position-absolute w-100 h-100 rounded" src={homeworkImage} style={{ objectFit: 'cover' }} alt="Appointment" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
