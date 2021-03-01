"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_connect_1 = __importDefault(require("./utils/db.connect"));
var routes_1 = require("./routes");
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//attach routes
routes_1.routes.forEach(function (route) {
    var method = route.method, path = route.path, middleware = route.middleware, handler = route.handler;
    console.log(route);
    app[method].apply(app, __spreadArray(__spreadArray([path], middleware), [handler]));
});
var PORT = process.env.PORT || 3012;
var db = "mongodb://localhost:27017/tsmocha";
db_connect_1.default({ db: db });
app.listen(PORT, function () {
    console.log("server is running on PORT " + PORT);
});
