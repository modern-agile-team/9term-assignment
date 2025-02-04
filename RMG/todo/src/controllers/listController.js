"use strict";

const processList = require("../models/list");

// 출력 관련 객체
const output = {
  // 할 일 목록을 조회하고 렌더링하는 함수
  listTodo: async (req, res) => {
    const newTodo = new processList(req.body);
    const getItems = await newTodo.listItems();
    // 'todo' 뷰를 렌더링하며, 조회된 항목들을 전달합니다
    res.render("todo", { items: getItems.items });
  },
};

// 데이터 처리 관련 객체
const process = {
  // 새로운 할 일을 생성하는 함수
  createTodo: async (req, res) => {
    const newTodo = new processList(req.body);
    try {
      const response = await newTodo.createTodo();
      res.json(response); // 생성 결과를 JSON 형태로 응답
    } catch (error) {
      console.error("Error creating todo:", error);
      // 오류 발생 시 500 상태 코드와 함께 오류 메시지 반환
      res
        .status(500)
        .json({ success: false, message: "Failed to create todo" });
    }
  },

  // 할 일을 삭제하는 함수
  delTodo: async (req, res) => {
    const delTodo = new processList(req.body);
    try {
      const response = await delTodo.delTodo();
      res.json(response); // 삭제 결과를 JSON 형태로 응답
    } catch (error) {
      console.error("Error deleting todo:", error);
      // 오류 발생 시 500 상태 코드와 함께 오류 메시지 반환
      res
        .status(500)
        .json({ success: false, message: "Failed to delete todo" });
    }
  },

  // 할 일을 업데이트하는 함수
  updateTodo: async (req, res) => {
    const updateTodo = new processList(req.body);
    try {
      const response = await updateTodo.updateTodo();
      res.json(response); // 업데이트 결과를 JSON 형태로 응답
    } catch (error) {
      console.error("Error updating todo:", error);
      // 오류 발생 시 500 상태 코드와 함께 오류 메시지 반환
      res
        .status(500)
        .json({ success: false, message: "Failed to update todo" });
    }
  },
};

// output과 process 객체를 모듈로 내보냅니다
module.exports = {
  output,
  process,
};
