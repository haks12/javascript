// 과거 문법
let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

// 요새 쓰는 문법
makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris', 57))

//
function User(name) { // 생성자 표현하기 위해 대문자 U
    // this = {} 이 코드가 생략되어있음. 쓰면 에러
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    return this // this객체의 타입은 User
}

let user1 = User('bob')  // undefined 출력
user1 = new User('bob')// User타입 객체가 이미 있을 때에는 new 를 붙히자. // User {name: 'bob', greet: ƒ} 출력
console.log(user1)

user1.greet() // user 안에 this객체, this 안에는 name, name 은 bob // I am bob. 출력
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet() // I am sarah. 출력

//
let str = String(1) // 1이라는 넘버를 string 타입으로 캐스팅한다.
console.log(typeof str)

str = new String(1) // 생성자로  object 타입이다.
console.log(typeof str)

//
let human = new function() {
    // this = {} 이 코드가 생략되어있음. 쓰면 에러
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name) // type, key 순으로 출력

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name) // BigUser this가 return되지 않는다.

// console.log(BigUser().name, SmallUser().name) 
//TypeError: Cannot read properties of undefined (reading 'name')
// 과제 : new를 하지 않고, 앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name) // beth undefined 출력

//
const user = new Object()
console.log(user)
user.age = 12

//
const person = Object.create(user) // create(복사하고싶은객체)
console.log(person)
console.log(person.age)
console.log(person == user) // 논리적으로 다른 객체이다.

person.name = 'mandarin'
console.log(user)