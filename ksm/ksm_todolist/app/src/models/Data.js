"use strict";

const todoStorage = require("./todoStorage");

class RequestData {
    constructor(body) {
        this.body = body;
    }

    // 생성
    async createTodo() {
        try {
            await todoStorage.create(this.body);
            return { success: true, msg: "Todo가 성공적으로 추가되었습니다." };
        } catch (err) {
            return { success: false, msg: `오류 발생: ${err}` };
        }
    }

    // 수정
    async updateTodo(id, description, is_check) {
        try {
            const newInfo = { description, is_check };
            await todoStorage.update(id, newInfo);
            return { success: true, msg: "Todo가 성공적으로 업데이트되었습니다."};
        } catch (err) {
            return { success: true, msg: `오류 발생: ${err}` };        
        }
    }

    // 삭제
    async deleteTodo(id) {
        try {
            const result = await todoStorage.delete(id);
            if (result) {
                return { success: true, msg: "Todo가 성공적으로 삭제되었습니다."};
            } 
        } catch (err) {
            return { success: true, msg: `오류 발생: ${err}` };        
        }
    }
        
    // 조회
    async getTodos() {
        try {
            const todos = await todoStorage.get();
            return { success: true, data: todos };
        } catch (err) {
            return { success: false, msg: `오류 발생: ${err}` };
        }
    }
}

module.exports = RequestData;




