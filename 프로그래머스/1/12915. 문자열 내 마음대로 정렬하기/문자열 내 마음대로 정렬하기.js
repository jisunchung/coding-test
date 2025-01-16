function solution(strings, n) {
    //a-b값이 0보다 작으면 a 우선 , 0 정렬 x, 0 보다 크면 b우선
    return strings.sort((a,b) => a[n] > b[n] ? 1 : (a[n] < b[n] ? -1 : (a>b ? 1 : (a<b ? -1 : 0))) )
}