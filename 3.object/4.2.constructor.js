function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(name, fire) {
    this.name = name
    this.fire = () => gun.fire()
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()

//
function Ball() {}

function Player(name) {
    this.name = name
    this.pass = ball => ball // pass는 method(행동)
    this.kick = ball => ball // kick은 method(행동)
}

const ball = new Ball()
const Player1 = new Player('최한석')
const Player2 = new Player('한아름')
const Player3 = new Player('양승일')

// 과제: 다음 이야기를 표현하라.
// 최한석이 한아름에게 공을 패스했다. 한아름은 양승일에 공을 패스했다.
// 양승일은 공을 찼다.
console.log(player3.kick(player2.pass(player1.pass(ball))))

//
function Food(name) {
    this.name = name
}

function Mom() {
    this.cook = foodName => new Food(foodName)
}

function Child() {
    this.eat = food => console.log(food) // 주의) console.log 가 작동하는것 아니다. 테스트목적일 뿐
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))