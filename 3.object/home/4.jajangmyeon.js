/* 과제:
~ 를 객체지향으로 refactoring 하라.
*/
/*
let chef1 = food => `달콤한 ${food}.\n`

let chef2 = food => `매운 ${food}.\n`

let waiter = (food, chef) => chef(food)


console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))
*/

function Food(name) {
    this.name = name
}

function Chef1() {
    this.cook = '매운' => new Food(foodName)
}

function Chef2() {
    this.cook = '달콤한' => new Food(foodName)
}

function Menu() {
    this.show = food => console.log(food)
}

const food = new Food()
const chef1 = new Chef1()
const chef2 = new Chef2()
const menu = new Menu()

chef1.cook(menu.show('짜장면'))
chef2.cook(menu.show('짜장면'))
chef2.cook(menu.show('짬뽕'))