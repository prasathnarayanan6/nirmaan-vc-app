const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "3306",
  password: "1234",
  database: "traktor"
})
client.connect(function(err) {
  if(err) throw err;
});
module.exports = client;
