function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi) // function 출력
console.log(sayHi.name) // (객체.function)
console.log(sayHi.length) // last para는 제하고 계산한다.

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name) // sayHi를 객체로서 접근
console.log(user.sayBye.name)

//
sayHi = function() { 
    let count = 100
    console.log('hi')
    console.log(sayHi.count++) // NaN출력 count가 개체속성이 아니라서
}

sayHi()
console.log(`call count: ${sayHi.count}`) // NaN출력

sayHi.count = 0
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`) // call count: 2 출력