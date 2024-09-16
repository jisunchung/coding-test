const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const cards = Array.from({ length: 20 }, (_, idx) => idx + 1);

input.forEach(scope => {
	const [s,e] = scope.split(" ").map(Number)

	const reversed = cards.slice(s-1, e).reverse()
	cards.splice(s-1, e-s+1, ...reversed)
})

console.log(cards.join(" "))
