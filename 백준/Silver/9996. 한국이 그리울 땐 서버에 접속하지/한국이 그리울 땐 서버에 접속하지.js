const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input.shift())
const pattern = input.shift().split("*")

let result = ""
for(const val of input){
	const front = val.substring(0, pattern[0].length)
	const back = val.substring(val.length - pattern[1].length)
    if (val.length < pattern[0].length + pattern[1].length) result += "NE\n";
	else if(front === pattern[0] && back === pattern[1]) result+= "DA\n"
	else result+= "NE\n"
}

console.log(result)

