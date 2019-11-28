const express = require('express');
const pool = require('../database/db');

const app = express();
const port = 3000;

const promisePool = pool.promise();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));