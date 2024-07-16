const [s, t] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

const visited = new Set()
let found = false

if(s === t){
	console.log(0)
	process.exit()
}

let q = []
q.push([s, ""])
visited.add(s)
while(q.length !== 0){
	let [v, opers] = q.shift()
	if(v > 1e9) continue
	if(v === t) {
		console.log(opers)
		found = true
		break
	}
	for(let oper of ["*", "+", "-", "/"]){
		let next = eval(v+oper+v)
		if(visited.has(next)) continue
		visited.add(next)
		q.push([next, opers+oper])
	}
}
if(!found) console.log(-1)