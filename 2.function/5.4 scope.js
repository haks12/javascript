//sayHi()
let name = 'neo'
sayHi()

function sayHi() { // function declaraion 실행문이 아닌 선언문
    console.log('Hi,', name)
}

sayHi()

//
//sayHello() // ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() { // function expression
    console.log('Hello,', name)
}

sayHello()