'use strict'

const apple =()=>{
    console.log(arguments);
    console.log(typeof(arguments[0]))
}

apple({
    apple:'apple',
    object:'object field'
},5,6,7)