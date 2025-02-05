"use strict";

const RequestData = require("../../models/data");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
};

const createlist = {
    todolist: async (req, res) => {
        const data = new RequestData(req.body);
        const response = await data.createTodo();
        return res.json(response);
    }
};


const updatelist = {
    todolist: async (req, res) => {
        const data = new RequestData(req.body);
        const { id, description, is_check } = req.body;
        const response = await data.updateTodo(id, description, is_check);
        return res.json(response);
    }
};

const deletelist = {
    todolist: async (req, res) => {
        const { id } = req.query;
        const data = new RequestData();
        const response = await data.deleteTodo(id);
        return res.json(response);
    }
};

const process = {
    todolist: async (req, res) => {
        const data = new RequestData();
        const response = await data.getTodos();

        if (response.success) {
            res.json({ success: true, data: response.data });
        } else {
            res.json({ success: false, msg: response.msg });
        }
    },
};

module.exports = {
    output,
    createlist,
    updatelist,
    deletelist,
    process,
};

