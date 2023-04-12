"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe("First Tests", () => {
    it("should pass", () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it("should fail", () => {
        (0, chai_1.expect)(true).to.be.false;
    });
});
