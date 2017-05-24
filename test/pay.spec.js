// 테스트대상.spec.js 형태로 이름을 붙인다.
import Pay from "../src/pay/pay.js";
import chai from "chai"

const expect = chai.expect;

describe("Pay", () => {

	const pay = new Pay();

	describe("#getVersion", ()=> {
		it("shoud returns 1.0.0", () => {
			const version = pay.getVersion();
			expect(version).to.equal("1.0.0");
		});
	});
});