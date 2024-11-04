const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to fetch homework data
app.get('/homework', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const homeworkData = JSON.parse(data);
        res.json(homeworkData);
    });
});

// Endpoint to download homework data as Excel
app.get('/homework/download', async (req, res) => {
    fs.readFile('db.json', 'utf8', async (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const homeworkData = JSON.parse(data);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Homework');

        // Add headers
        worksheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Title', key: 'title', width: 30 },
            { header: 'Description', key: 'description', width: 50 },
            { header: 'Due Date', key: 'dueDate', width: 15 }
        ];

        // Add rows
        homeworkData.forEach(item => {
            worksheet.addRow(item);
        });

        // Set response headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename=homework.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Write to response
        await workbook.xlsx.write(res);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
