"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zxc123!@",
  database: "todo_list",
});

db.connect();

module.exports = db;
