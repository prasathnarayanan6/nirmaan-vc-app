const LoginController = async(req, res) => {
    try
    {
        
        res.send("doen");
    }
    catch (err)
    {
        console.log(err);
    }
}
const UserRegister = async(req, res) => {
    try
    {
           res.send("nnnn")
    }
    catch (err)
    {

    }
}
module.exports = {LoginController, UserRegister}