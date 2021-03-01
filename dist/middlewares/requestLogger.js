"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
var requestLogger = function (req, res, next) {
    console.log(req.path);
    next();
};
exports.requestLogger = requestLogger;
