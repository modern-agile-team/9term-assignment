"use strict";

const db = require("../config/db");

class listStorage {
  // 모든 항목을 데이터베이스에서 가져오는 메서드
  static async getItems(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "SELECT description,id FROM list";
      db.query(query, (err, results) => {
        if (err) reject(`${err}`);
        else resolve({ success: true, items: results });
      });
    });
  }

  // 새로운 항목을 데이터베이스에 저장하는 메서드
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO list(description) VALUES(?);";
      db.query(query, [userInfo.todo], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  // 특정 ID의 항목을 데이터베이스에서 삭제하는 메서드
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM list WHERE id = (?);";
      db.query(query, [id.id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  // 특정 ID의 항목을 데이터베이스에서 업데이트하는 메서드
  static async update(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE list SET description = (?) WHERE id = (?)";
      db.query(query, [userInfo.editList, userInfo.ListId], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = listStorage;
