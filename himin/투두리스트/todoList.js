const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
let taskCount = 0; // 할 일 카운트 변수

// 리스트 생성
addButton.addEventListener('click', addTodo);

function addTodo() {
  taskCount++; // 할 일 번호 증가
  const value = `할 일 ${taskCount}`; // 할 일 제목 생성

  // 리스트 아이템 생성
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  listItem.innerHTML = `
    <input type="checkbox" class="todo-checkbox" />
    <span class="todo-text">${value}</span>
    <button class="edit-button"><i class="fas fa-pencil-alt"></i></button>
    <button class="delete-button"><i class="fas fa-trash"></i></button>
  `;

  // 삭제 버튼 이벤트
  listItem.querySelector('.delete-button').addEventListener('click', () => {
    listItem.remove();
  });

  // 수정 버튼 이벤트
  listItem.querySelector('.edit-button').addEventListener('click', () => {
    const todoText = listItem.querySelector('.todo-text');
    const editButton = listItem.querySelector('.edit-button');

    // 수정 버튼 숨기기
    editButton.style.display = 'none';

    // 기존 텍스트를 숨기고, 인풋 필드와 완료 버튼 추가
    todoText.style.display = 'none';
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = todoText.textContent;

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button';
    completeButton.textContent = '완료';

    // 완료 버튼 이벤트
    completeButton.addEventListener('click', () => {
      todoText.textContent = editInput.value.trim();
      todoText.style.display = 'inline';

      // 완료 버튼과 입력 필드 제거
      editInput.remove();
      completeButton.remove();

      // 수정 버튼 다시 표시
      editButton.style.display = 'inline';
    });

    // 리스트에 수정용 인풋 필드와 완료 버튼 추가
    listItem.insertBefore(editInput, todoText.nextSibling);
    listItem.insertBefore(completeButton, listItem.querySelector('.delete-button'));
  });

  // 체크박스 이벤트 (취소선 추가 및 수정 버튼 숨김)
  listItem.querySelector('.todo-checkbox').addEventListener('change', (e) => {
    const todoText = listItem.querySelector('.todo-text');
    const editButton = listItem.querySelector('.edit-button');

    if (e.target.checked) {
      todoText.style.textDecoration = 'line-through'; // 취소선 추가
      editButton.style.display = 'none'; // 수정 버튼 숨김
    } else {
      todoText.style.textDecoration = 'none'; // 취소선 제거
      editButton.style.display = 'inline'; // 수정 버튼 다시 표시
    }
  });

  // 리스트에 추가
  todoList.appendChild(listItem);
}
