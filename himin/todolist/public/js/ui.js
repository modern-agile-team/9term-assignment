import { updateTodo, deleteTodo } from './api.js';

export const renderTodo = (todo, todoList) => {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';
  listItem.id = `todo-${todo.id}`;

  // DOM 요소 생성
  const checkbox = createCheckbox(todo);
  const todoText = createTodoText(todo);
  const editButton = createEditButton();
  const deleteButton = createDeleteButton();

  // 요소들을 listItem에 추가
  listItem.append(checkbox, todoText, editButton, deleteButton);

  // 이벤트 바인딩
  bindCheckboxEvent(checkbox, listItem, todo);
  bindDeleteEvent(deleteButton, listItem, todo);
  bindEditEvent(editButton, listItem, todo, todoText);

  // 최종적으로 todoList에 추가
  todoList.appendChild(listItem);
};

const createCheckbox = (todo) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox';
  checkbox.checked = todo.completed;  // 초기 체크 상태 설정
  return checkbox;
};

const createTodoText = (todo) => {
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = todo.task;
  span.style.textDecoration = todo.completed ? 'line-through' : 'none';
  return span;
};

const createEditButton = () => {
  const button = document.createElement('button');
  button.className = 'edit-button';
  // createElement로 요소를 생성
  button.innerHTML = '<i class="fas fa-pencil-alt"></i>';
  return button;
};

const createDeleteButton = () => {
  const button = document.createElement('button');
  button.className = 'delete-button';
  button.innerHTML = '<i class="fas fa-trash"></i>';
  return button;
};

const bindCheckboxEvent = (checkbox, listItem, todo) => {
  // 이벤트 객체의 target을 활용하여 체크박스 상태를 가져옵니다.
  checkbox.addEventListener('change', (event) => {
    const isCompleted = event.target.checked; // event.target 사용
    updateTodo(todo.id, todo.task, isCompleted)
      .catch(console.error);

    // todo 텍스트 스타일 업데이트
    const todoText = listItem.querySelector('.todo-text');
    if (todoText) {
      todoText.style.textDecoration = isCompleted ? 'line-through' : 'none';
    }
  });
};

const bindDeleteEvent = (deleteButton, listItem, todo) => {
  deleteButton.addEventListener('click', () => {
    deleteTodo(todo.id)
      .then(() => listItem.remove())
      .catch(console.error);
  });
};

const bindEditEvent = (editButton, listItem, todo, todoText) => {
  editButton.addEventListener('click', () => {
    // 기존 텍스트 요소를 입력 필드로 대체
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'edit-input';
    inputField.value = todo.task;
    listItem.replaceChild(inputField, todoText);

    // 버튼 텍스트를 '저장'으로 변경
    editButton.textContent = '저장';

    // 저장 버튼 클릭 이벤트 (한 번만 실행)
    editButton.addEventListener('click', () => {
      const updatedTask = inputField.value.trim();
      if (updatedTask) {
        updateTodo(todo.id, updatedTask, todo.completed)
          .then(() => {
            // todo 업데이트
            todo.task = updatedTask;

            // 수정된 내용을 다시 텍스트로 표시
            const updatedText = document.createElement('span');
            updatedText.className = 'todo-text';
            updatedText.textContent = updatedTask;
            updatedText.style.textDecoration = todo.completed ? 'line-through' : 'none';
            listItem.replaceChild(updatedText, inputField);

            // 버튼 아이콘 복원
            editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
          })
          .catch(console.error);
      } else {
        alert('내용을 입력해주세요!');
      }
    }, { once: true });
  });
};

export const clearTodoList = (todoList) => {
  todoList.innerHTML = '';
};
