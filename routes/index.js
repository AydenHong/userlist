require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({ //config파일이 들어감
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect()

