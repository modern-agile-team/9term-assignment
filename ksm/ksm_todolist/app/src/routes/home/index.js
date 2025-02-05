"use strict";

const express =require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/api/todolists", ctrl.process.todolist); // 조회 라우터

router.post("/api/todolists", ctrl.createlist.todolist);
router.put("/api/todolists", ctrl.updatelist.todolist);
router.delete("/api/todolists", ctrl.deletelist.todolist);

module.exports = router;