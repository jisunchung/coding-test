const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input.shift());
const arr = input.map(Number)

arr.forEach(value => {
	const fib = [0, 1];
	let i = 2
	while(fib[i-1] < value){
		fib.push(fib[i-1] + fib[i-2])
		i++
	}
	let num = value
	let j = fib.length-1
	let result = []
	while(num){
		if(num - fib[j] >= 0){
			result.push(fib[j])
			num -= fib[j]
		}
		j--
	}
	console.log(result.sort((a,b) => a-b).join(" "))
})
