#!/usr/bin/env node
"use strict";
const meow = require("meow");
const fs = require("fs");
const mdCat = require(".");

const cli = meow(`
	Usage
	  $ md-cat [filename]

	Examples
		$ md-cat list.txt
		\`\`\`txt titlelist.txt
		apple
		banana
		\`\`\`
`);

mdCat(cli.input[0]);
