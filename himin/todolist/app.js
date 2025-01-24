import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('views'));

// 라우트 설정
app.use('/todos', todoRoutes);

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가동:${PORT}`);
});
