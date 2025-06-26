function solution(brown, yellow) {

    const area = brown + yellow
    
    //약수 조합 찾기
    for(let i = 1; i <= Math.sqrt(area); i++){
        if(area % i === 0){
            const w = area / i, h = i
            //조각 수 확인
            const border = w*2 + h*2 - 4
            if(border === brown && (w*h - border) === yellow){
                return [w,h]
            }
        }
    }
}