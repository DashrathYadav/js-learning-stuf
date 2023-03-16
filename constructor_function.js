'use-strict'


const Person= function(name){

    this.name=name;
    this.age=40;

    eat=function(){
        console.log("sleep")
    };

}

Person.prototype.year=15
Person.aka='static';

let obj1=new Person('ram');
let obj2=new Person('shyam');

// console.log(obj1);
// console.log(obj2);

 console.log( typeof(Person.prototype));
// console.log(obj1.name);

for (const key in obj1) {
    
    console.log(obj1[key])

    }

 
    // console.log(Person.hasOwnPrototype('age'));
