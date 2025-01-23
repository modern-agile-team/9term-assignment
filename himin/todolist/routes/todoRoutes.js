const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// 1. GET 요청: 모든 할 일 가져오기
router.get('/', todoController.getAllTodos);

// 2. POST 요청: 새로운 할 일 추가
router.post('/', todoController.addTodo);

// 3. PUT 요청: 특정 할 일 수정
router.put('/:id', todoController.updateTodo);

// 4. DELETE 요청: 특정 할 일 삭제
router.delete('/:id', todoController.deleteTodo);

module.exports = router;