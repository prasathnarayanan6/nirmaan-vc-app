const client = require('../utils/conn');
const LoginModel = (user_mail, user_password) => {
    return new Promise((resolve, reject) => {
        client.query(`SELECT user_mail, user_password, user_department FROM user_data WHERE user_mail=? && user_password=?`,
        [user_mail, user_password],
        (error, result)=> {
            if (error) 
            {
                reject(error);
            }
            else
            {
                resolve(result);
            }
        })
    })
}
module.exports = LoginModel;