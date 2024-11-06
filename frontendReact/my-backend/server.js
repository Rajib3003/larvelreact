const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Sample Data (Ideally, this should come from a database)
let homeworkData = [
    { id: 1, version: 'Bangla', className: 'One', batch: 'A', date: '2024-11-01', subject: 'Math', homework: 'Complete Chapter 1' },
    { id: 2, version: 'English', className: 'Two', batch: 'B', date: '2024-11-02', subject: 'Science', homework: 'Write Essay' },
    { id: 3, version: 'Bangla', className: 'One', batch: 'A', date: '2024-11-04', subject: 'Science', homework: 'Prepare Science notes' },
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
// app.get('/homework/download', (req, res) => {
//     res.send('Download Homework');
// });

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

const XLSX = require('xlsx');

app.get('/homework/download', (req, res) => {
    const { version, className, batch, date } = req.query;

    // Filter homework based on query params, including date
    let filteredHomework = homeworkData.filter(item => {
        let isValid = true;

        if (version) isValid = isValid && item.version === version;
        if (className) isValid = isValid && item.className === className;
        if (batch) isValid = isValid && item.batch === batch;
        if (date) isValid = isValid && item.date === date;

        return isValid;
    });

    if (filteredHomework.length === 0) {
        return res.status(404).send('No homework found for the specified date and filters.');
    }

    // Create a workbook and add the filtered data to the worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(filteredHomework);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Homework');

    // Write workbook to a buffer and send as a response
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="homework_${date}.xlsx"`);
    res.send(buffer);
});
