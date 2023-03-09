'use strict';
/*
{
var apple = "apple";

}
function eat(callback) {
    //  let apple ="mango";
    console.log(`I am eating an ${apple}`);

    callback();
    {
        function sleep() {
            console.log(` In sleep also i can access ${apple}`)
        }
    }
    
    sleep()
}


eat(() => {
    console.log("I am call back function")
})

apple = "mago"

*/

let color='green';

const apple={
    color:'red',
    fruit:true,
    getColor:function(){
        console.log(` I am apple \n I am ${this.color} is color`)
    
    const fun=function(){
        console.log("this is fun function this",this);
    }

    fun();
    },

    
}


apple.getColor();
