"use strict";

// 필요한 모듈들을 불러옵니다.
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/todo");

// Express 애플리케이션을 생성합니다.
const app = express();

// 뷰 엔진을 EJS로 설정하고, 뷰 파일의 위치를 지정합니다.
app.set("view engine", "ejs");
app.set("views", "./src/views");

// 정적 파일을 제공하기 위한 미들웨어를 설정합니다.
app.use(express.static(path.join(__dirname, "public")));

// JSON 및 URL-encoded 데이터를 파싱하기 위한 미들웨어를 설정합니다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터를 애플리케이션에 연결합니다.
app.use("/", router);

// 애플리케이션을 모듈로 내보냅니다.
module.exports = app;
