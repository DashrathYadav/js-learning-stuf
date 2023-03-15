let apple=1;
let test
const fun1=function(){
    let apple=10;


test= function(){
    apple+=50;
} 

 return function(){
        apple*=10;
    console.log(apple)
    }
}

const temp=fun1();
test();
temp();
test();
temp();