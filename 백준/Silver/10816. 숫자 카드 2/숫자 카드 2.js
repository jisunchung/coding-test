const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const N = Number(input[0])
const target = input[1].split(" ").map(Number).sort((a,b)=> a-b)
const M = Number(input[2])
const arr = input[3].split(" ").map(Number)
let result = []

function lowerBound(arr, target, start, end){
	while(start < end){
		let mid = parseInt((start + end) / 2)
		if(arr[mid] >= target) end = mid
		else start = mid + 1
	}
	return end
}
function upperBound(arr,target, start, end){
	while(start < end){
		let mid = parseInt((start + end) / 2)
		if(arr[mid] > target) end = mid
		else start = mid + 1
	}
	return end
}

function countByRange(arr, leftValue, rightValue){
	let rightIndex = upperBound(arr, rightValue, 0, arr.length)
	let leftIndex = lowerBound(arr, leftValue, 0, arr.length)
	return rightIndex-leftIndex
}

arr.forEach(i => result.push(countByRange(target, i, i)))
console.log(result.join(' '))