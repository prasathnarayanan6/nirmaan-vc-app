const client = require('../utils/conn');
const LoginModel = (user_mail, user_password) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT user_mail, user_role, user_password, user_department FROM user_data WHERE user_mail=$1 AND user_password=$2`,
        [user_mail, user_password],
        (error, result)=> {
            if (error) 
            {
                reject(error);
            }
            else
            {
                if(result.rows.length > 0)
                {
                    if(result.rows[0].user_role === 2)
                    {
                        resolve({authenticationLevel: "Admin"});
                    }
                    else if(result.rows[0].user_role === 1)
                    {
                        resolve({authenticationLevel: "Finance"});
                    }
                    else 
                    {
                        resolve({authenticationLevel: "User"});
                    }
                }
                else
                {
                    resolve({authenticated: "Invalid Username"});
                }
            }
        })
    })
}
module.exports = LoginModel;