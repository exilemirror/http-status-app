const fs = require('fs');
const express = require('express')
const bodyparser = require("body-parser");
const httpstatus = require('./utils/httpstatus')

// csv files path
const csvToJson = require('convert-csv-to-json');
const csvData = './filenames/urls.csv';

const app = express();
app.set("view engine","ejs") 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = process.env.PORT || 3000

// Convert csv to json
const jsonArray = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvData);

// Home Page
app.get('', (req, res) => {
    httpstatus(jsonArray, (data) => {
        res.json(data)
    })
})

// Listening port
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
