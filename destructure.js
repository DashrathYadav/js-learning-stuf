'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  location:location,
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterMenuIndx,mainMenuIndx)
  { 
        return [this.starterMenu[starterMenuIndx],this.mainMenu[mainMenuIndx]];
  }


};
/*
const arr=['apple','mango','banana'];
const [fruit1,fruit2,fruit3]=arr;
// console.log(fruit1,fruit2,fruit3);
// console.log(restaurant.order(2,0));

  const [starter,mainMenus]=restaurant.order(2,0);
//   console.log(starter,mainMenu)


 const { name:Names,mainMenus:Menu='apple'}=restaurant;
 
 console.log(Names,Menu);

 


 const arr=[1,2,3,4,5,6,7,8];
 const apple=[...arr];

    console.log(arr[3]);
*/
const str="adfjfl";
console.log(typeof(str))

const arr= [...str];
console.log(...str)

function spreadCheck(ing11,ing2,ing3)
{
    return (`you passed ${ing11} and ${ing2} and ${ing3}`);
}

const result=spreadCheck(...restaurant.mainMenu)

const [r1,r2,...rest]=result;

console.log(r1,r2,rest);   

for( let items of restaurant.categories)
{
    console.log(items);
}

