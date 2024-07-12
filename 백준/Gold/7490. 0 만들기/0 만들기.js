const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)


let result = []
let answer = ""

function dfs(depth, num, arr){
	if(depth === num) {
		let tmp = [1]
		result.forEach((sign, idx) => {
			if(sign === ' '){ 
				tmp.push(Number(tmp.pop()+""+arr[idx+1]))
			}else if(sign === "+"){
				tmp.push(arr[idx+1])
			}else{
				tmp.push(arr[idx+1]*-1)
			}
		})
		if(tmp.reduce((acc,curr)=> acc+curr,0)===0){
			for(let i = 0 ; i < num; i++){
				answer+= arr[i] + result[i]
			}
			answer+= arr[num] +'\n'
		}
		return
	}

	for(let operator of [' ','+','-']){
		result.push(operator)
		dfs(depth+1, num,arr)
		result.pop()
	}

}

input.forEach(n => {
	let arr = Array.from({length:n}, (_,index)=> index+1)
	dfs(0,n-1, arr) 
	answer+= "\n"
})

console.log(answer)