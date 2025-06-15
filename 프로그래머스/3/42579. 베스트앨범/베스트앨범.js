function solution(genres, plays) {
    //bucket sort
    const map = {}
    for(let i = 0; i < genres.length; i++){
        if(!map[genres[i]]) map[genres[i]] = []
        map[genres[i]].push([plays[i], i])
    }
    console.log(map)

}