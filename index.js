"use strict";

const fs = require("fs");

module.exports = (input) => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	const buf = fs.readFileSync(input);
	const ext = input.split(".").pop();
	process.stdout.write("```" + ext + " title=" + input + "\n");
	process.stdout.write(buf);
	process.stdout.write("\n```\n");
};
