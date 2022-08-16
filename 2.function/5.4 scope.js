//sayHi() //ReferenceError
let name = 'neo'
sayHi()

function sayHi() { // function declaraion 실행문이 아닌 선언문. 글로벌객체가 생기자마자
    console.log('Hi,', name)
}

sayHi()

//
//sayHello() // ReferenceError: Cannot access 'sayHello' before initialization //변수는 존재, uninitialized

const sayHello = function() { // function expression
    console.log('Hello,', name)
}

sayHello()