let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

//
Rabbit.prototype = animal // Rabbit이라는 생성자의 부모로 animal
console.log(Rabbit.prototype) // Rabbit의 원형 animal 출력

rabbit = new Rabbit('white')
console.log(rabbit.isAlive) // rabbit에서 isAlive찾으니 없다. 다음, 부모 animal에서 isAlive발견. ture 출력

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck) // true

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) // true

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck') // proto type으로