function solution(n, m) {
    let a = n, b = m;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return [a, (n * m) / a];
}