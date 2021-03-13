const creds = require("./userConfig");
const sql = require('mysql');

// these are the same connect data that you would use in a PHP connect script
// We want to obsure them a bit for a security (normally these would be saved in an .env file)
// and then read in at runtime / create time


const connection = sql.createPool({
    connectionLimit : 10,
    host            : creds.host,
    user            : creds.user,
    password        : creds.password,
    port            : creds.port, 
    database        : creds.database
  });

  module.exports = connection;