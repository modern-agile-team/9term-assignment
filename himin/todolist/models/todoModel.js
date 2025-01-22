const mysql = require("mysql2");
require("dotenv").config(); // .env 파일 로드

// 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 데이터 가져오기
exports.getAll = (callback) => {
  db.query("SELECT * FROM todos", callback);
};

// 데이터 추가
exports.create = (task, callback) => {
  db.query("INSERT INTO todos (task) VALUES (?)", [task], callback);
};

// 데이터 수정
exports.update = (id, task, callback) => {
  db.query("UPDATE todos SET task = ? WHERE id = ?", [task, id], callback);
};

// 데이터 삭제
exports.delete = (id, callback) => {
  db.query("DELETE FROM todos WHERE id = ?", [id], callback);
};

// 데이터 수정
exports.update = (id, task, completed, callback) => {
  const query = 'UPDATE todos SET task = ?, completed = ? WHERE id = ?';
  console.log('Executing query:', query, 'with values:', [task, completed, id]); // 쿼리 로그 추가
  db.query(query, [task, completed, id], callback);
};

// 데이터 조회
exports.findById = (id, callback) => {
  const query = 'SELECT * FROM todos WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(new Error('Todo not found'));
    callback(null, results[0]);
  });
};

