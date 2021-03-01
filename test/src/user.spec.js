"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var users_service_1 = require("../../src/services/users.service");
describe("test for user service", function () {
    it("should return a new object", function () {
        chai_1.assert.typeOf(users_service_1.addUser, "Object");
    });
});
