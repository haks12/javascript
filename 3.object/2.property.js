let user = {}//property가 없는 객체

user.height = 200
user['weight'] = 80//property 추가

console.log(user.height, user.weight)

delete user.weight//property 삭제
console.log(user.weight)

console.log('height' in user)//'있다'는 true
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.name = 'paker'//height와 name property 2개 있는 상태
console.log(Object.keys(user))
console.log(Object.values(user))
//key와 value를 통칭하여 entry라 칭한다.
console.log(Object.entries(user))

//
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => {console.log('hello')}
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.name) // TypeError
console.log(user.city?.name) // undefined 출력

//
let street
//street = user.city.street
street = user?.city?.street // undefiend 출력
console.log(street) // undefiend 출력
street = user?.city?.street ?? 'where'
console.log(street)

//user?.address ='sejong' // op chainning은 할당연산자 값에 기재해야 한다.

user = null
//user.greet() // TypeError: Cannot read properties of null null의 property를 읽을 수 없다.
console.log(user?.greet)
user = undefined
//user.greet() // TypeError: undefined의 property를 읽을 수 없다.

//
user = {}
//user.greet() // TypeError: user.greet is not a function
user.greet?.() // undefined 출력 greet이 없으면 undefined