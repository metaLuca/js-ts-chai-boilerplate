import {expect} from "chai";

describe("First Tests", () => {
    it("should pass", () => {
        expect(true).to.be.true;
    });
    it("should fail", () => {
        expect(true).to.be.false;
    });
});
