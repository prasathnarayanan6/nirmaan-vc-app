const LoginModel = require('../../model/LoginModel')
const LoginController = async (req, res) => {
    try
    {
        const {user_mail, user_password} = req.body
        const result = LoginModel(user_mail, user_password);
        res.status(200).json({status: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}
module.exports = LoginController;