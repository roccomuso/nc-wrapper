#!/usr/bin/env node

const argv = process.argv.slice(2)

/*
- pipe the child process stdout to the current stdout
- pipe current stdin to the child stdin
*/

const nc = require('./lib')(argv, {
	stdio: [process.stdin, process.stdout, process.stderr]
})
