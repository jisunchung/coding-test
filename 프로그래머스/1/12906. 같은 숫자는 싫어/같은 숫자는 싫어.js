function solution(arr)
{
    const res = []
    for(const val of arr){
        if(res[res.length -1] !== val) res.push(val)
    }
    return res
}