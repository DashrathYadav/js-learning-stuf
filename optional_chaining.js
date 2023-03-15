'use strict'

const nested = {
    name:'lev0',
    desc:'I have lev1',
    lev1: {
        name: 'lev1',
        desc: 'I have lev2',
        lev2: {
            name: 'lev2',
            desc: 'I have lev3',
            lev3: {
                name: 'lev3',
                desc: 'I dont have lev4',
            }
        }
    } 
}

if(nested?.lev1?.lev2?.lev3)
{
    console.log("All level exixt");
}
else{
    
    console.log("Prop not  exixt");
}

