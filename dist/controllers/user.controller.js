"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postin = exports.Login = exports.addUsr = void 0;
var users_service_1 = require("../services/users.service");
var addUsr = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    users_service_1.addUser({ username: username, password: password });
    res.status(201).send("User created");
};
exports.addUsr = addUsr;
var Login = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var found = users_service_1.getUser({ username: username, password: password });
    if (!found) {
        return res.status(400).send("Login failed");
    }
    return res.status(200).send("success");
};
exports.Login = Login;
var Postin = function (req, res) {
    var _a = req.body, title = _a.title, content = _a.content;
    var note = users_service_1.sendUser({ title: title, content: content });
    return res.status(200).send({ note: note });
};
exports.Postin = Postin;
