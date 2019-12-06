'use strict';

const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
<<<<<<< HEAD
  host: 'localhost',
  user: 'matias',
  password: 'creeperawwman',
  database: 'bigfish',
  /*host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,*/
=======
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
>>>>>>> d8c6c086f87ce0970da99b6361e888fba30562a5
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;