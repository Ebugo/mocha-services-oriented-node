"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = (function (_a) {
    var db = _a.db;
    var connect = function () {
        mongoose_1.default
            .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () {
            return console_1.info("MongoDB connected");
        })
            .catch(function (err) {
            console_1.error("Error connecting to database:", err);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
});
