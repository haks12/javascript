let user1 = {
    name: 'isabel',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user1.greet()
user2.greet()

//
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}.`) //function에서 this변수를 사용할 때, 주어객체가 들어간다.
}

greet() // I am undefined.출력

greet.call(user1)
greet.call(user2)

//
user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet()

// 과제: user1.greet 을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)
//call은 주어function을 call한다.