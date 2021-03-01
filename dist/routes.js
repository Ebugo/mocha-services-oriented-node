"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var user_controller_1 = require("./controllers/user.controller");
var home_controller_1 = require("./controllers/home.controller");
var requestLogger_1 = require("./middlewares/requestLogger");
exports.routes = [
    {
        method: "post",
        path: "/login",
        middleware: [requestLogger_1.requestLogger],
        handler: user_controller_1.Login,
    },
    {
        method: "get",
        path: "/signup",
        middleware: [],
        handler: user_controller_1.addUsr,
    },
    {
        method: "get",
        path: "/",
        middleware: [requestLogger_1.requestLogger],
        handler: home_controller_1.Home,
    },
    {
        method: "post",
        path: "/post",
        middleware: [],
        handler: user_controller_1.Postin
    }
];
