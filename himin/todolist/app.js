require("dotenv").config(); // .env 파일의 내용 로드

const express = require("express");
const app = express();

// 환경 변수 사용
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
