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

function createTodo(event) {
  event.preventDefault(); // 기본 폼 제출 방지
  const todo = document.querySelector(".todo-new-input");

  if (!todo.value) return alert("할 일을 입력해주세요");

  const req = { todo: todo.value };

  fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
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
  fetch("/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }), // ID를 JSON 형식으로 전송
  })
    .then((res) => res.json())
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
  const req = {
    ListId: id,
    editList: newText,
  };

  fetch("/todos", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("서버 응답:", res);
      if (res.success) {
        location.href = "/";
      } else {
        console.log("else");
      }
    })
    .catch((error) => {
      console.error("수정 중 오류 발생:", error);
    });
}
