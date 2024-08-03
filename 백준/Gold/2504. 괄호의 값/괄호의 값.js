const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function calculateValue(input) {
		let stack = [];
		let temp = 1;
		let result = 0;

		for (let i = 0; i < input.length; i++) {
				let char = input[i];

				if (char === '(') {
						stack.push(char);
						temp *= 2;
				} else if (char === '[') {
						stack.push(char);
						temp *= 3;
				} else if (char === ')') {
						if (stack.length === 0 || stack[stack.length - 1] !== '(') {
								return 0;
						}
						if (input[i - 1] === '(') {
								result += temp;
						}
						stack.pop();
						temp /= 2;
				} else if (char === ']') {
						if (stack.length === 0 || stack[stack.length - 1] !== '[') {
								return 0;
						}
						if (input[i - 1] === '[') {
								result += temp;
						}
						stack.pop();
						temp /= 3;
				}
		}

		if (stack.length !== 0) {
				return 0;
		}

		return result;
}

console.log(calculateValue(input));
