function solution(n)
{
    return n.toString().split('').reduce((acc, curr)=> acc+= +curr,0)
}