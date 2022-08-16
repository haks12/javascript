let user = {
    name: 'france',//key는 string이거나 symbol이다.
    ager : 70//value는 아무타입이나 가능
}//할당연산자 오른쪽에 블럭만들면 object를 나타내는 문법이며, key와 value로 나타낸다.

user = {
    name: {
        first:'bob',
        last: 'smith'
    },//각각 entry는 컴마로 구분
    'nick name' : 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
}// 이 user는 4개의 entry(속성)을 갖고있다. property다.

console.log(user.name)
console.log(user.name.first)
//콘솔에 lala가 출력되도록
user.sing()

//user.'nick name' 에러
//user.nick name 에러
console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

//man.1 에러
console.log(man['1'])