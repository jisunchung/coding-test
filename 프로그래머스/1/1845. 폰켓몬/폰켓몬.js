function solution(nums) {
    const choose = Math.floor(nums.length / 2)
    let s = new Set(nums)
    return s.size > choose ? choose : s.size
}