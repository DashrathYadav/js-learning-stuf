'use strict'
/*
 let  Man1={
    name:'Ram',
    age:'20',
    AgeModifier()
    {
        this.age='50';       //this refer to Man1
        console.log(this)  // print Man1
    }
}

Man1.AgeModifier()



function apple()
{
    let color='red';
    let fruit=true;
    console.log(`color val is ${color}`)
    console.log(`color val is ${color}`)
    console.log(this)   // undefined
    
}


const mango=()=>{
    console.log("mango",this)    // picked this key word form parent using lexing(up looking) 
                                // in this case its window object
                                
}




  // makes properties on window object
  console.log(this)    // window  is global object in broweser
  this.color='yellow';

//   console.log(window.color)
apple();
mango();


{

 const g='global';
{
    let apple='apple';

    const mango=()=>{
        console.log("this is refring to ",this)
    }

    mango()
}
}

*/



const obj1={
    name:"obj1",
    work:"debugging this key word",
    color:"red",
    fun:function(){
        console.log("this is fun function with this as ",this);
    },
    getColor:function(){
        console.log(` I am apple \n I am ${this.color} is color`)
        const apple='ablle';
    const fun2=()=>{
        console.log("this is fun function this",this);
    }

    fun2();
}
}
obj1.fun()
obj1.getColor();