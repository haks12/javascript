let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2) // Q: id1 == id2 => id1과 id2는 같을까? A: false

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1 // userId property 추가 // String type
user[userId] = 2 // Symbol type

console.log(user)

//과제: user 객체를 itertaing 해서, key 들을 출력하라.
for(let key in user) console.log(key)

console.log(Object.keys(user))

//global symbol registry
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2)

let key = Symbol.keyFor(id1)
console.log(key,typeof key)

//
id1 = Symbol.for('name') // global symbol
id2 = Symbol('name') // local symbol
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))