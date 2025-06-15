class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    insertAndCheck(word) {
        let cur = this.root
        for (let c of word) {
            // 이전 번호가 현재 번호의 접두어인 경우
            if (cur.endOfWord) return false

            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode())
            }
            cur = cur.children.get(c)
        }

        // 현재 번호가 이전 번호의 접두어인 경우
        if (cur.children.size > 0) return false

        cur.endOfWord = true
        return true
    }
}

function solution(phone_book) {
    const prefixTree = new PrefixTree()

    phone_book.sort()
    console.log(phone_book)

    for (const number of phone_book) {
        if (!prefixTree.insertAndCheck(number)) {
            return false
        }
    }

    return true
}