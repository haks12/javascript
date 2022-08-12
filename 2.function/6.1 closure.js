const age = 16

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

console.log(age)