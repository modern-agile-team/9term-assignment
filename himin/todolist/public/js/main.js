import { setupEventListeners, refreshTodoList } from './events.js';

window.onload = () => {
  const addButton = document.getElementById('add-button');
  const taskInput = document.getElementById('task-input');
  const todoList = document.getElementById('todo-list');

  // 이벤트 리스너 설정
  setupEventListeners(addButton, taskInput, todoList);

  // 초기 목록 가져오기
  refreshTodoList(todoList);
};
