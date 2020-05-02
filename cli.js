#!/usr/bin/env node
"use strict";
const meow = require("meow");
const fs = require("fs");
const mdCat = require(".");

const cli = meow(`
	Usage
	  $ codeblock-cat [filename]

	Examples
		$ codeblock-cat list.txt
		\`\`\`txt titlelist.txt
		apple
		banana
		\`\`\`
`);

mdCat(cli.input[0]);
