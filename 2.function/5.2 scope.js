let a = 1
// let a

{ // local scope
    console.log(a)
}

{
    let a = 2
    console.log(a)//local에 있는ㄴ a객체
}

console.log(a)