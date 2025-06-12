function solution(nums) {
    //반을 가질 수 있을 때 가장 많은 포켓몬의 종류번호의 개수
    const set = new Set(nums)
    return set.size > nums.length / 2  ? nums.length  / 2 : set.size
}