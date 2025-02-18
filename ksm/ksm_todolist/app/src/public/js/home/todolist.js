"use strict";

const todoInput = document.querySelector('#todoInput'); // 입력창
const addBtn = document.querySelector('#addBtn'); // 추가 버튼
const todoList = document.querySelector('#todoList'); // 할 일 목록 컨테이너

// 페이지 로드 후 서버에서 할 일 목록 불러오기
document.addEventListener("DOMContentLoaded", fetchTodos);

// 서버에서 할 일 목록 가져오기
function fetchTodos() {
    fetch("/api/todolists")
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                todoList.innerHTML = "";
                res.data.forEach(todo => createTodo(todo));                    
            } else {
                alert("할 일 목록을 가져오는데 실패했습니다.");
            }
        });
}

// 할 일 서버에 추가 요청
function addDB() {
    const req = {
        description: todoInput.value,     
    };

    fetch("/api/todolists", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then ((res) => {
            if (res.success) {
                alert(res.msg);
                fetchTodos(); // 목록 갱신
            }
        });      
}

// 엔터 키 입력 이벤트 처리
function keyCodeCheck(event) {
    if (event.key === 'Enter') {
        if (todoInput.value.trim() === '') {
            alert("할 일을 입력하세요.");
        } else {
            addDB();
        }
    }
}

// 추가 버튼 클릭 이벤트 처리
addBtn.addEventListener('click', () => {
    if (todoInput.value.trim() === ''){
        alert("할 일을 입력하세요.");
    } else {
        addDB();
    }
});


// 할 일 목록 생성 함수
function createTodo (todo) {
    const newLi = document.createElement('li');
    newLi.dataset.id = todo.id;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name =`todo_${todo.id}`; // 체크박스 이름 설정
    checkbox.checked = todo.is_check === 1; // 체크 상태

    const todoText = document.createElement('span'); // 할 일 텍스트 요소
    const deleteBtn = document.createElement('button'); 
    const modifyBtn = document.createElement('button');
    
    // 자식 요소로 추가
    newLi.append(checkbox, todoText, deleteBtn, modifyBtn);
    todoText.textContent = todo.description;

    todoList.appendChild(newLi); // 목록에 새 할 일 추가

    deleteBtn.classList.add('delete-btn'); 
    modifyBtn.classList.add('modify-btn'); 

    todoInput.value = ''; 
    
    // 삭제 버튼 이벤트 리스너
    deleteBtn.addEventListener('click', () => deleteTodo(newLi.dataset.id, newLi));

    // 수정 버튼 이벤트 리스너
    modifyBtn.addEventListener('click', () => modifyTodo(newLi, todoText, modifyBtn));

    // 체크박스 이벤트 리스너
    checkbox.addEventListener('change', (event) => {
        const is_check = checkbox.checked ? 1 : 0;
        const liElement = event.target.closest('li');

        liElement.classList.toggle('completed', is_check === 1);

        updateCheck(liElement.dataset.id, is_check);
    });

    // 마우스 호버에 따른 줌인, 줌 아웃 이벤트
    deleteBtn.addEventListener("mouseover", zoomIn);
    deleteBtn.addEventListener("mouseout", zoomOut);
    modifyBtn.addEventListener("mouseover", zoomIn);
    modifyBtn.addEventListener("mouseout", zoomOut);
}

    
// 체크 상태 업데이트 
function updateCheck(id, is_check) {
    const liElement = document.querySelector(`li[data-id="${id}"]`);
    const description = liElement.querySelector('span').textContent;

    const req = { 
        id: id, 
        is_check: is_check, 
        description: description
    };

    fetch("/api/todolists", {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                console.log("체크 상태가 성공적으로 업데이트되었습니다.")
            } else {
                alert("체크 상태 업데이트 실패");
            }
        });
}

// 할 일 삭제 
function deleteTodo(id, liElement) {
    fetch(`/api/todolists?id=${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then ((res) => {
            if (res.success) {
                liElement.remove(); 
                alert(res.msg);
            }
        });     
}

// 할 일 수정 
function modifyTodo(liElement, spanElement, modifyBtn) {

    // const spanElement = liElement.querySelector('span');
    const input = document.createElement('input');
    input.value = spanElement.textContent; 
    
    liElement.replaceChild(input, spanElement); // 입력창으로 대체
    input.focus();
    
    const finishBtn = document.createElement('button');
    finishBtn.textContent = '완료';
    finishBtn.classList.add('finish-btn');

    modifyBtn.replaceWith(finishBtn); // 완료 버튼으로 교체

    // 완료 버튼 클릭 시 수정 요청
    finishBtn.addEventListener('click', () => {
        if (input.value.trim() === '') {
            alert("할 일을 입력하세요.");
            input.focus();
            return;
        }  

        const req = {
            id: liElement.dataset.id,
            description: input.value,
        };

        fetch("/api/todolists", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    alert(res.msg);
                    spanElement.textContent = input.value;
                    liElement.replaceChild(spanElement, input);
                    finishBtn.replaceWith(modifyBtn); // 수정 버튼으로 교체
                } else {
                    alert(res.msg);
                }
            })
        
    });
}

// 버튼 호버 시 zoom in
function zoomIn(event) {
    event.target.classList.add("scale-up");
}

// 버튼 호버 시 zoom out
function zoomOut(event) {
    event.target.classList.remove("scale-up");
}

