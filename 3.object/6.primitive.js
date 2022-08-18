// 객체를 기본타입으로 바꾸기
let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) // 출력단위 : 초

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // hint는 변수, 변수는 datatype이 없다.
        return hint == 'string' ? this.name : this.age
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}
console.log(`${user}`) // `${user}`의 datatype은 String이다.
console.log(user > user2) // 20 > 38 : false 출력
console.log(user + 50) // 서로 타입이 다르면 넘버로 변환
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)