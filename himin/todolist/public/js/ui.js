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

  // 수정 버튼 이벤트
  listItem.querySelector('.edit-button').addEventListener('click', () => {
    const todoText = listItem.querySelector('.todo-text'); // 텍스트 요소를 선택
    const editButton = listItem.querySelector('.edit-button');
  
    // 기존 todoText 요소가 DOM에 존재하는지 확인
    if (!todoText) {
      console.error('todo-text 요소를 찾을 수 없습니다.');
      return;
    }
  
    // 텍스트를 입력 필드로 교체
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'edit-input';
    inputField.value = todo.task;
  
    listItem.replaceChild(inputField, todoText); // todoText를 입력 필드로 교체
    editButton.textContent = '저장'; // 버튼 텍스트를 '저장'으로 변경
  
    // 저장 버튼 클릭 이벤트
    editButton.addEventListener('click', () => {
      const updatedTask = inputField.value.trim();
      if (updatedTask) {
        updateTodoOnServer(todo.id, updatedTask, todo.completed)
          .then(() => {
            // 수정된 내용을 다시 텍스트로 표시
            todo.task = updatedTask;
            const updatedText = document.createElement('span');
            updatedText.className = 'todo-text';
            updatedText.textContent = updatedTask;
            updatedText.style.textDecoration = todo.completed ? 'line-through' : 'none';
  
            listItem.replaceChild(updatedText, inputField); // 입력 필드를 다시 텍스트로 교체
            editButton.textContent = ''; // 버튼 아이콘 복원
            editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
          })
          .catch(console.error);
      } else {
        alert('내용을 입력해주세요!');
      }
    }, { once: true }); // 저장 이벤트는 한 번만 동작하도록 설정
  });
  
  // 생성된 요소를 리스트에 추가
  todoList.appendChild(listItem);
};

export const clearTodoList = (todoList) => {
  todoList.innerHTML = '';
};
