const express = require('express');
const addcontacts = require('./routes/contact');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.listen('3001', (req, res)=> {
    console.log('Hello');
})
app.use('/api/v1/addcontacts', addcontacts);

