import mysql from "mysql2"; // mysql2 모듈 가져오기
import dotenv from "dotenv"; // dotenv 모듈 가져오기

dotenv.config(); // .env 파일 로드

// 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 데이터 가져오기
export const getAll = (callback) => {
  db.query("SELECT * FROM todos", callback);
};

// 데이터 추가
export const create = (task, callback) => {
  db.query("INSERT INTO todos (task) VALUES (?)", [task], callback);
};

// 데이터 삭제
export const deleteTodo = (id, callback) => {
  db.query("DELETE FROM todos WHERE id = ?", [id], callback);
};

// 데이터 수정 (완성도 포함)
export const update = (id, task, completed = null, callback) => {
  const query = completed !== null
    ? "UPDATE todos SET task = ?, completed = ? WHERE id = ?"
    : "UPDATE todos SET task = ? WHERE id = ?";

  const values = completed !== null ? [task, completed, id] : [task, id];

  console.log("쿼리 실행:", query, "값:", values);
  db.query(query, values, callback);
};

// 데이터 조회
export const findById = (id, callback) => {
  const query = 'SELECT * FROM todos WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('할 일을 찾는 중 에러 발생:', err); // 에러 로그
      return callback(err);
    }
    if (results.length === 0) {
      console.error('할 일을 찾을 수 없습니다.'); // 에러 로그
      return callback(new Error('할 일을 찾을 수 없습니다.'));
    }
    callback(null, results[0]);
  });
};