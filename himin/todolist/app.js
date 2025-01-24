import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';
import dotenv from 'dotenv';

// .env 설정 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json()); // JSON 요청 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 파싱
app.use(express.static('public')); // 정적 파일 제공

// 라우트 설정
app.use('/todos', todoRoutes);

// 전역 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가동:${PORT}`);
});
