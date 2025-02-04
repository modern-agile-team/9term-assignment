"use strict";

const createBtn = document.querySelector("#createBtn");
const todoList = document.querySelector(".todo-list");

// 폼에 submit 이벤트 리스너 추가
createBtn.addEventListener("click", createTodo);

// todoList에 클릭 이벤트 리스너 추가 (이벤트 위임)
todoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const id = event.target.getAttribute("data-id");
    deleteTodo(id);
  } else if (event.target.classList.contains("edit")) {
    editTodo(event.target);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.querySelector(".todo-list");

  todoList.addEventListener("change", function (e) {
    if (e.target.classList.contains("todo-checkbox")) {
      const todoItem = e.target.closest(".todo-item");
      const todoText = todoItem.querySelector(".todo-text");

      if (e.target.checked) {
        todoText.style.textDecorationLine = "line-through";
      } else {
        todoText.style.textDecorationLine = "none";
      }
    }
  });
});

function fetchAPI(method, data = null) {
  const url = "/todos";
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((result) => {
      if (result.success) {
        return result;
      } else {
        throw new Error(result.message);
      }
    });
}

function createTodo(event) {
  event.preventDefault(); // 기본 폼 제출 방지
  const todo = document.querySelector(".todo-new-input");

  if (!todo.value) return alert("할 일을 입력해주세요");

  const body = { todo: todo.value };

  fetchAPI("POST", body)
    .then((res) => {
      if (res.success) {
        location.href = "/";
      }
    })
    .catch((error) => {
      console.error("생성 중 오류 발생:", error);
    });
}

function deleteTodo(id) {
  fetchAPI("DELETE", { id: id })
    .then((res) => {
      if (res.success) {
        location.reload();
      }
    })
    .catch((error) => {
      console.error("삭제 중 오류 발생:", error);
    });
}

function editTodo(editButton) {
  const todoItem = editButton.closest(".todo-item");
  const todoText = todoItem.querySelector(".todo-text");
  const editInput = todoItem.querySelector(".edit-input");

  if (editInput.style.display === "none" || editInput.style.display === "") {
    // 수정 모드로 전환
    todoText.style.display = "none";
    editInput.style.display = "inline-block";
    editButton.textContent = "저장"; // 저장 아이콘으로 변경
  } else {
    // 저장 모드
    const newText = editInput.value;
    const id = editButton.getAttribute("data-id");
    if (newText !== "") {
      return updateTodo(id, newText);
    } else {
      return alert("할 일을 입력해주세요");
    }
  }
}

function updateTodo(id, newText) {
  const body = {
    listId: id,
    editList: newText,
  };

  fetchAPI("PUT", body)
    .then(() => {
      location.href = "/";
    })
    .catch(() => {
      alert("할 일 수정에 실패했습니다.");
    });
}
