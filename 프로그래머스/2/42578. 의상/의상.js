function solution(clothes) {
    //1. 종류별로 hash map을 만든다 
    //2. 종류별로 최대 1가지 의상만 착용 가능
    //3. 일부가 겹쳐도 다른 의상이 다르면 됨
    //4. 하나 이상은 입어야됨
    
    const map = {}
    for(const [_, type] of clothes){
        map[type] = (map[type] || 0) + 1
    }
    
    let res = 1
    for(const val in map){
        res *= (map[val] + 1)
    }
    
    return res - 1
    
    
    
    
}