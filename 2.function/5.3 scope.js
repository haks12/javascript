const greeting = 'hello'//실행해야 greeting에 hello생김

say('abel')//function이 글로벌에 존재, 실행가능

function say(name) { // function declaraion 함수선언
    console.log(greeting, name)
}

say('john')