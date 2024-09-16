const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()

const tmp = {}

for(c of input){
	if(c === "6" || c === "9") tmp["6"] = (tmp["6"] || 0) + 1
	else tmp[c] = (tmp[c] || 0) + 1
}
if(tmp["6"]) tmp["6"] = Math.round(tmp["6"]/2)

console.log(Math.max(...Object.values(tmp)))

