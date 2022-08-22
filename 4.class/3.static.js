class Article {
    static publiser = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) { // hint는 3가지 : String, number, deault
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publiser)

//
Article. address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1,article2))

//
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser) // static변수는 class에 있지, 변수에 있는게 아니다.
console.log(article1.publiser. article1.address, article1.compare) // undefined : 46이유동일
console.log(Article.title, Article.viewCnt)
console.log(Object.keys(Article1))
console.log(Article.prototype)
console.log(Object,keys(article1))

//
let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare)
Article.compare = (a, b) => b = a
articles.sort(Article.compare)
console.log(articles)
