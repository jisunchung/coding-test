const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const alpha = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g

const result = input.replace(alpha, "A")

console.log(result.length)