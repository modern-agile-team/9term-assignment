const todoModel = require('../models/todoModel');

exports.getAllTodos = (req, res) => {
  todoModel.getAll((err, todos) => {
    if (err) {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    } else {
      res.json(todos);
    }
  });
};

exports.addTodo = (req, res) => {
  const { task } = req.body;
  todoModel.create(task, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to add todo' });
    } else {
      res.status(201).json({ id: result.insertId, task });
    }
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  todoModel.update(id, task, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to update todo' });
    } else {
      res.sendStatus(200);
    }
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  todoModel.delete(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete todo' });
    } else {
      res.sendStatus(200);
    }
  });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
  
    // task 값이 없을 경우 기존 값을 유지하도록 설정
    todoModel.findById(id, (err, existingTodo) => {
      if (err || !existingTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      const updatedTask = task || existingTodo.task; // 기존 task 유지
      todoModel.update(id, updatedTask, completed, (err) => {
        if (err) {
          console.error('Error updating todo:', err);
          res.status(500).json({ error: 'Failed to update todo' });
        } else {
          res.sendStatus(200); // 성공
        }
      });
    });
  };
  