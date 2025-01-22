// HTML 요소 선택
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// 서버에서 할 일 목록 가져오기
function fetchTodos() {
  fetch('/todos')
    .then(response => response.json())
    .then(data => {
      todoList.innerHTML = ''; // 기존 목록 초기화
      data.forEach(todo => renderTodo(todo));
    })
    .catch(error => console.error('Error fetching todos:', error));
}

// 서버에 새로운 할 일 추가
function addTodoToServer(task) {
  fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task }),
  })
    .then(fetchTodos) // 목록 갱신
    .catch(error => console.error('Error adding todo:', error));
}

// 새로운 할 일 추가
function addTodo() {
  fetch('/todos')
    .then(response => response.json())
    .then(data => {
      const lastId = data.length > 0 ? data[data.length - 1].id : 0; // 마지막 ID 가져오기
      const task = `할 일 ${lastId + 1}`; // 제목 생성
      addTodoToServer(task); // 서버에 저장
    })
    .catch(error => console.error('Error fetching todos:', error));
}

// 서버에서 할 일 삭제
function deleteTodoFromServer(id) {
  fetch(`/todos/${id}`, { method: 'DELETE' })
    .then(() => {
      document.getElementById(`todo-${id}`).remove(); // UI에서 제거
    })
    .catch(error => console.error('Error deleting todo:', error));
}

// 서버에서 할 일 수정
function editTodoOnServer(id, listItem) {
  const todoText = listItem.querySelector('.todo-text');
  const editButton = listItem.querySelector('.edit-button');

  todoText.style.display = 'none';
  editButton.style.display = 'none';

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'edit-input';
  editInput.value = todoText.textContent;

  const completeButton = document.createElement('button');
  completeButton.className = 'complete-button';
  completeButton.textContent = '완료';

  completeButton.addEventListener('click', () => {
    const updatedTask = editInput.value.trim();
    fetch(`/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: updatedTask }),
    })
      .then(() => {
        todoText.textContent = updatedTask;
        todoText.style.display = 'inline';
        editButton.style.display = 'inline';
        editInput.remove();
        completeButton.remove();
      })
      .catch(error => console.error('Error updating todo:', error));
  });

  listItem.insertBefore(editInput, todoText.nextSibling);
  listItem.insertBefore(completeButton, listItem.querySelector('.delete-button'));
}

// 할 일 렌더링
function renderTodo(todo) {
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
    updateTodoStatusOnServer(todo.id, isCompleted);
    const todoText = listItem.querySelector('.todo-text');
    todoText.style.textDecoration = isCompleted ? 'line-through' : 'none';
  });

  // 삭제 버튼 이벤트
  listItem.querySelector('.delete-button').addEventListener('click', () => {
    deleteTodoFromServer(todo.id);
  });

  // 수정 버튼 이벤트
  listItem.querySelector('.edit-button').addEventListener('click', () => {
    editTodoOnServer(todo.id, listItem);
  });

  todoList.appendChild(listItem);
}

function updateTodoStatusOnServer(id, completed) {
  // task 값도 서버에 전달
  const task = document.querySelector(`#todo-${id} .todo-text`).textContent;

  fetch(`/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, completed }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update todo status');
      }
      console.log('Updated todo status successfully');
    })
    .catch(error => console.error('Error updating todo status:', error));
}

// 초기화
addButton.addEventListener('click', addTodo);
window.onload = fetchTodos;
