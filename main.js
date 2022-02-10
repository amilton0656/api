const path = require('path');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/status.html')
})

app.listen(21276)