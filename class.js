'use strict'
/*
class Person{
    constructor( fullName,age )
    {
        this.fullName=fullName;
        this.age=age;
    }

    get name_getter()
    {
        return this.fullName;
    }

    static person()
    {
        console.log("This is static method")
    }
}


  const person1 =new Person('ram',45);

for(const ele in person1){
    console.log(ele);
}
  console.log(person1);
  */

  const Human={
    kind:'Human',
    hand:2,
    leg:'two',

    get humaInfo()
    {
        console.log("Human kind is "+ this.kind +"  hand " +" "+this.leg);
    }

  }

  const person= Object.create(Human);