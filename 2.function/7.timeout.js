function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //1초 있다가 반응

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)//15에서 줄세웠다가 16에서 빼버림. 실행안됨.