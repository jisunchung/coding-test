function solution(food) {
    var answer = '';
    if(food.length === 1) return "0"
    for(let i = 1; i < food.length; i++){
        answer+= i.toString().repeat(food[i]/2)
    }
    return answer + "0" + answer.split("").reverse().join("");
}