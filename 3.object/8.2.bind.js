let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user) // function객체.bind 문법
fn()

setTimeout(fn, 100) // I am leo.출력

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: fn에 user.greet 할당하라.
// greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet) // false출력

//bind는 주어function을  return 한다.