"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUser = exports.getUser = exports.addUser = void 0;
var user = [];
var addUser = function (newUser) {
    return user.push(newUser);
};
exports.addUser = addUser;
var getUser = function (usr) {
    return user.find(function (us) { return us.username === usr.username && us.password === usr.password; });
};
exports.getUser = getUser;
var sendUser = function (pst) {
    return pst;
};
exports.sendUser = sendUser;
