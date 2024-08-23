let input = require("fs").readFileSync("/dev/stdin").toString().trim()

const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for(target of alpha) input = input.replaceAll(target, "A")

console.log(input.length)





