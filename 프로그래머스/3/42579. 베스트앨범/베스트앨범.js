function solution(genres, plays) {
    //bucket sort
    const songMap = {}
    const genreMap = {}
    for(let i = 0; i < genres.length; i++){
        genreMap[genres[i]] = (genreMap[genres[i]] || 0) + plays[i]
        
        if(!songMap[genres[i]]) songMap[genres[i]] = []
        songMap[genres[i]].push([plays[i], i])
    }
    
    const sortedGenres = [...Object.entries(genreMap)].sort((a,b) => b[1] - a[1]).map(val => val[0])
    
    const res = []
    
    for(const genre of sortedGenres){
        const songs = songMap[genre]
        
        songs.sort((a,b) =>{
            if(a[0] !== b[0]) return b[0] - a[0] //재생수 큰것부터 오게 내림차순
            return a[1] - b[1] //인덱스 작은것 부터 오게 오름차순
        })
        res.push(...songs.slice(0,2).map(song => song[1]))
    }
    return res
}