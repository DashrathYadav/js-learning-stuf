'use strict'
// console.log(apple)
/*
over()
function over()
{
let age=20;
let Age=age;
age+=1;
console.log(age,Age);

const apple={
    name:'apple',
    color:'red',
    price:'100$'
}

const obj1=apple;

console.log(apple,obj1);

obj1.color="yellow";
obj1.name="mango";
console.log(apple,obj1);    
}

console.log(apple)

*/

const apple={

    color:"red",
    fruit:true,
    price:'100$',
}

let mango={
    color:"yellow",
    season:"summer",
}

 mango= Object.assign({},apple);
console.log(mango)