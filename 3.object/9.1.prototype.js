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