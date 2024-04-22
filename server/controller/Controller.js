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
    var res_date_time = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
    try
    {
           const {user_id, user_name, user_designation, user_password, user_created_date } = req.body
           if(isEmpty(req.body.user_id))
           {
                res.json({Status: 'Data is missing'});
           }
           else if(isEmpty(req.body.user_name))
           {
                res.json({Status: 'Data is missing'});
           }        
           else
           {
                res.json({Status: 'Register working', Date: res_date_time, user_id: user_id, user_name: user_name});
           }
    }
    catch (err)
    {
            res.status(500).json({status: "Not Inserted Properly"});
    }
}
module.exports = {LoginController, UserRegister}