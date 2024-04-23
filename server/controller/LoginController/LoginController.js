const client = require('../../utils/conn.js');
const LoginController = (req, res) => {
    const{user_email, user_password} = req.body;
    res.send(user_email);
    res.send(user_password);
}
module.exports = LoginController;