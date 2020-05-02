const mdCat = require("../");
const util = require("util");
const spy = jest.spyOn(process.stdout, "write");

it("cat list.txt", () => {
	mdCat("test/list.txt");

	expect(spy.mock.calls[0][0]).toMatchSnapshot();
	expect(new util.TextDecoder().decode(spy.mock.calls[1][0])).toMatchSnapshot();
	expect(spy.mock.calls[2][0]).toMatchSnapshot();
});
