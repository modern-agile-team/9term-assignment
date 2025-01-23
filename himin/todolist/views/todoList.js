// HTML 요소 선택
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input'); // 인풋 필드 선택
const todoList = document.getElementById('todo-list');

// 서버에서 할 일 목록 가져오기
function fetchTodos() {
  fetch('/todos')
    .then(response => response.json())
    .then(data => {
      todoList.innerHTML = ''; // 기존 목록 초기화
      data.forEach(todo => renderTodo(todo));
    })
    .catch(error => console.error('데이터를 가져오는 중 에러가 발생했습니다:', error));
}

// 서버에 새로운 할 일 추가
function addTodoToServer(task) {
  fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task }),
  })
    .then(() => {
      fetchTodos(); // 목록 갱신
      taskInput.value = ''; // 입력 필드 초기화
    })
    .catch(error => console.error('새로운 할 일을 추가하는 중 에러가 발생했습니다:', error));
}

// 새로운 할 일 추가
function addTodo() {
  const task = taskInput.value.trim(); // 입력값 가져오기
  if (task === '') {
    alert('할 일을 입력하세요!'); // 입력값이 비어 있으면 경고
    return;
  }
  addTodoToServer(task); // 서버에 저장
}

// 엔터 키 이벤트 추가
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') { // 엔터 키인지 확인
    addTodo(); // 엔터 키를 누르면 addTodo 호출
  }
});

// 서버에서 할 일 삭제
function deleteTodoFromServer(id) {
  fetch(`/todos/${id}`, { method: 'DELETE' })
    .then(() => {
      document.getElementById(`todo-${id}`).remove(); // UI에서 제거
    })
    .catch(error => console.error('할 일을 삭제하는 중 에러가 발생했습니다:', error));
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
      .catch(error => console.error('할 일을 수정하는 중 에러가 발생했습니다:', error));
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
  const task = document.querySelector(`#todo-${id} .todo-text`).textContent;

  fetch(`/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, completed }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('할 일 상태 업데이트 실패');
      }
      console.log('할 일 상태가 성공적으로 업데이트되었습니다.');
    })
    .catch(error => console.error('할 일 상태 업데이트 중 에러가 발생했습니다:', error));
}

// 초기화
addButton.addEventListener('click', addTodo);
window.onload = fetchTodos;
