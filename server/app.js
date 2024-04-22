const express = require('express');
const LoginController = require('./routes/route');
const UserRegister = require('./routes/route');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.listen('3001', (req, res)=> {
    console.log('Hello');
})
app.use('/api/v1/a', LoginController);
app.use('/api/v1/b', UserRegister);
