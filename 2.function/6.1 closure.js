const age = 16
//sayAge() // TypeError: sayAge is not a function
//tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge) //ReferenceError 아니다. undefined : 변수는 존재, function은 아니다.
//console.log(hello) // ReferenceError: hello is not defined

{ //lexical environment 생성(또 다른 네모)
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {//local block이어서 tellAge생기지않는다.
        console.log(age)
    }

    sayAge()
    tellAge()
}//블럭이 생성되면 로컬 생김, 블럭끝나면 로컬 사라진다.

sayAge() // 10
//tellAge() // ReferenceError
console.log(age)
//js에서는 function도 객체이다.
//closure 외부변수를 참조할 수 있는 function