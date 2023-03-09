'use strict';

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