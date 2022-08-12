const age = 16
//sayAge() // TypeError: sayAge is not a function
//tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge) //ReferenceError 아니다. undefined
//console.log(hello) // ReferenceError: hello is not defined

{ //lexical environment 생성(또 다른 네모)
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}
sayAge() // 10
//tellAge() // ReferenceError
console.log(age)
//js에서는 function도 객체이다.
//closure 외부변수를 참조할 수 있는 function