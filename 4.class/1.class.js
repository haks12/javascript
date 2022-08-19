class User { // sugar syntax
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john') // 생성자
console.log(user.name)
user.introduce()

//
User = class {
    name
    age // 멤버변수 2개

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

new User('abel', 12).introduce()

//
function makeClass(phrase) {
    return
    sayHi() {
        console.log(phrase)
    }
}

User = makeClass('hello')
new User().sayHi()