"use strict";

const listStorage = require("./listStorage");

// todoList 클래스를 정의합니다.
class todoList {
  // 생성자: body 매개변수를 받아 객체의 속성으로 설정합니다.
  constructor(body) {
    this.body = body;
  }

  // 모든 할 일을 가져오는 메서드
  async listItems() {
    try {
      // listStorage의 getItems 메서드를 호출하여 모든 항목을 가져옵니다.
      const response = await listStorage.getItems();
      return response;
    } catch (err) {
      // 오류 발생 시 실패 메시지와 오류를 반환합니다.
      return { success: false, err };
    }
  }

  // 새로운 할 일 항목을 생성하는 메서드
  async createTodo() {
    const client = this.body;
    try {
      // listStorage의 save 메서드를 호출하여 새 항목을 저장합니다.
      const response = await listStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  // 특정 할 일 항목을 삭제하는 메서드
  async delTodo() {
    const client = this.body;
    try {
      // listStorage의 delete 메서드를 호출하여 항목을 삭제합니다.
      const response = await listStorage.delete(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  // 특정 할 일 항목을 업데이트하는 메서드
  async updateTodo() {
    const client = this.body;
    try {
      // listStorage의 update 메서드를 호출하여 항목을 업데이트합니다.
      const response = await listStorage.update(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

// todoList 클래스를 모듈로 내보냅니다.
module.exports = todoList;
