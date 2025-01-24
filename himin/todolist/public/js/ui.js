import { updateTodoOnServer, deleteTodoFromServer } from './api.js';

export const renderTodo = (todo, todoList) => {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';
  listItem.id = `todo-${todo.id}`;

  listItem.innerHTML = `
    <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} />
    <span class="todo-text" style="text-decoration: ${todo.completed ? 'line-through' : 'none'}">${todo.task}</span>
    <button class="edit-button"><i class="fas fa-pencil-alt"></i></button>
    <button class="delete-button"><i class="fas fa-trash"></i></button>
  `;

  // 체크박스 이벤트
  listItem.querySelector('.todo-checkbox').addEventListener('change', (e) => {
    const isCompleted = e.target.checked;
    updateTodoOnServer(todo.id, todo.task, isCompleted).catch(console.error);
    const todoText = listItem.querySelector('.todo-text');
    todoText.style.textDecoration = isCompleted ? 'line-through' : 'none';
  });

  // 삭제 버튼 이벤트
  listItem.querySelector('.delete-button').addEventListener('click', () => {
    deleteTodoFromServer(todo.id).then(() => listItem.remove()).catch(console.error);
  });

  // 추가된 요소를 렌더링
  todoList.appendChild(listItem);
};

export const clearTodoList = (todoList) => {
  todoList.innerHTML = '';
};
