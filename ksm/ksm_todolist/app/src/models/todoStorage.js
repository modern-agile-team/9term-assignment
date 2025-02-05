"use strict";

const db = require("../config/db");

class TodoStorage {
    static async create(todoInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todos(description, is_check) VALUES(?, ?);";
            db.query(query, [todoInfo.description, todoInfo.is_check, todoInfo.in_date], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });            
        });
    }

    static async update(id, newInfo) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE todos SET description = ?, is_check = ? WHERE id = ?;";
            db.query(query, [newInfo.description, newInfo.is_check, id], (err) => {            
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }

    static async delete(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM todos WHERE id = ?;";
            db.query(query, [id], (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    }

    static async get() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM todos;";
            db.query(query, (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data);
            });
        });
    }
}

module.exports = TodoStorage;

