import { getTodos, postTodo } from './api.js';
import { renderTodo, clearTodoList } from './ui.js';

export const setupEventListeners = (addButton, taskInput, todoList) => {
  // 할 일 추가 버튼 이벤트
  addButton.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (!task) {
      alert('할 일을 입력하세요!');
      return;
    }
    await postTodo(task);
    taskInput.value = ''; // 입력 필드 초기화
    refreshTodoList(todoList); // 목록 갱신
  });

  const ENTER_KEY = 'Enter'; // 엔터 키 상수

  // 엔터 키 이벤트
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === ENTER_KEY) {
      addButton.click(); // 클릭 이벤트 호출
    }
  });  
};

// 할 일 목록 갱신
export const refreshTodoList = async (todoList) => {
  try {
    const todos = await getTodos();
    clearTodoList(todoList);
    todos.forEach((todo) => renderTodo(todo, todoList));
  } catch (error) {
    console.error(error.message);
  }
};
