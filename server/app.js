const express = require('express');
const LoginController = require('./routes/route');
const bodyParser = require('body-parser');
const Authenticate = require('./utils/Authenticate');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen('3001', (err)=> {
    if(err) process.exit(1);
    console.log("working");
})
app.use('/api/v1/', LoginController);
app.get('/profile', Authenticate, (req, res) => {
    res.send('working');
})