const LoginModel = require('../../model/LoginModel')
const LoginController = async (req, res) => {
    const{user_mail, user_password} = req.body
    if(user_mail && user_password)
    {
        try
        {
            const result = await LoginModel(user_mail, user_password);
            res.status(200).json({result });
        }
        catch (err)
        {
            console.log(err);
            res.status(200).json({error: 'Internal Server Error'});
        }
    }
    else 
    {
		res.send('Please enter Username and Password!');
	}
}
module.exports = LoginController;