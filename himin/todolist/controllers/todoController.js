const todoModel = require('../models/todoModel');

exports.getAllTodos = (req, res) => {
  todoModel.getAll((err, todos) => {
    if (err) {
      res.status(500).json({ error: '할 일 목록을 가져오는 데 실패했습니다.' });
    } else {
      res.json(todos);
    }
  });
};

exports.addTodo = (req, res) => {
  const { task } = req.body;
  todoModel.create(task, (err, result) => {
    if (err) {
      res.status(500).json({ error: '할 일을 추가하는 데 실패했습니다.' });
    } else {
      res.status(201).json({ id: result.insertId, task });
    }
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  todoModel.delete(id, (err) => {
    if (err) {
      res.status(500).json({ error: '할 일을 삭제하는 데 실패했습니다.' });
    } else {
      res.sendStatus(200);
    }
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  // 기존 값을 유지하기 위해 기존 데이터를 조회
  todoModel.findById(id, (err, existingTodo) => {
    if (err || !existingTodo) {
      return res.status(404).json({ error: '할 일을 찾을 수 없습니다.' });
    }

    const updatedTask = task || existingTodo.task; // 기존 task 유지
    const updatedCompleted = completed !== undefined ? completed : existingTodo.completed; // 기존 completed 유지

    todoModel.update(id, updatedTask, updatedCompleted, (err) => {
      if (err) {
        console.error('할 일을 수정하는 중 에러:', err);
        res.status(500).json({ error: '할 일을 수정하는 중 에러가 발생했습니다.' });
      } else {
        res.sendStatus(200); // 성공 응답
      }
    });
  });
};
