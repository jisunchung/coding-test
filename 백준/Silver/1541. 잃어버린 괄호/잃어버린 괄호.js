const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("-")

let tmp = input.map(val => {
	return val.split("+").reduce((acc, curr) => acc + Number(curr),0)
})

// let sum = tmp[0]
// for(let i = 1 ; i < tmp.length; i++){
// 	sum -= tmp[i]
// }

console.log(tmp.reduce((acc, curr) => acc - curr,tmp.shift()))