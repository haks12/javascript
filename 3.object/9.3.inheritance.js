let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

//과제 : 토끼를 object literal 및 생성자로 만들어라.
//       토끼를 age = 3 property 를 갖고 있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age) // A is a B. Rabbit은 animal이다.

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrater = {
    __proto__: user
}

console.log(administrator.name) // user 출력

administerator.name = 'jonadan'
console.log(administrator.name) // jonadan 출력


//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() // animal eat.
rabbit.eat() // rabbit eat.
lion.eat() // lion eat.

//
console.log(Object.keys(rabbit))

// 과제: rabbit 의 key 들을 iterating 해서 출력하라.
for(let key in rabbit)
    console.log(key)

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) console.log`child's key: ${key}`
    else console.log`parant's key: ${key}`
    console.log(msg)
}