const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Sample Data (Ideally, this should come from a database)
let homeworkData = [
    { id: 1, version: 'Bangla', className: 'One', batch: 'A', date: '2024-11-01', subject: 'Math', homework: 'Complete Chapter 1' },
    { id: 2, version: 'English', className: 'Two', batch: 'B', date: '2024-11-02', subject: 'Science', homework: 'Write Essay' },
    { id: 3, version: 'Bangla', className: 'One', batch: 'A', date: '2024-11-01', subject: 'Science', homework: 'Prepare Science notes' },
    { id: 4, version: 'English', className: 'Two', batch: 'B', date: '2024-11-03', subject: 'Math', homework: 'Complete exercise 5' },
    // Add more entries as required...
];

// API to fetch homework based on filters
app.get('/homework', (req, res) => {
    const { version, className, batch, date } = req.query;

    // Filter homework based on query params
    let filteredHomework = homeworkData.filter(item => {
        let isValid = true;
        
        // Check each filter if present
        if (version) {
            isValid = isValid && item.version === version;
        }
        if (className) {
            isValid = isValid && item.className === className;
        }
        if (batch) {
            isValid = isValid && item.batch === batch;
        }
        if (date) {
            isValid = isValid && item.date === date;
        }

        return isValid;
    });

    res.json(filteredHomework);
});

// API to download homework (Example)
app.get('/homework/download', (req, res) => {
    res.send('Download Homework');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
