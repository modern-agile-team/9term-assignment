"use strict";

// Express 프레임워크를 불러옵니다.
const express = require("express");

// Express의 Router 객체를 생성합니다.
const router = express.Router();

// listController 모듈에서 컨트롤러 함수들을 가져옵니다.
const ctrl = require("../controllers/listController");

// 이는 아마도 모든 할 일 항목을 나열하는 기능일 것입니다.
router.get("/", ctrl.output.listTodo);

// 할 일 항목을 삭제하는 기능입니다.
router.delete("/todos", ctrl.process.delTodo);

// 새로운 할 일 항목을 생성하는 기능입니다.
router.post("/todos", ctrl.process.createTodo);

// 기존 할 일 항목을 업데이트하는 기능입니다.
router.put("/todos", ctrl.process.updateTodo);

// 설정된 라우터를 모듈로 내보냅니다.
module.exports = router;
