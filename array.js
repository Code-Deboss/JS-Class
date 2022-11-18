const cart = [];
const foods = ["moimoi","garri","rice","fufu","amala","bean"];

//length

let len = foods.length;
// console.log(len);

//access element in array
// let first = foods[0];
// console.log(first);

// let last = foods[len - 1];
// console.log(last);


//add to end of array
//foods.push("Beans");

//add to beginning of array
//foods.unshift("Dogmeat")


//add to middle of array
//foods.splice(3,0,"Yam");

//delete last item from array
// let revouedUtem = foods.pop();
// console.log(revouedUtem);

//delete from start of array

// foods.shift();

//delete from middle of array

// foods.splice(1,1)

//check if it contains items

let isfound = foods.includes("burger")

//indexof

 let index =  foods.indexOf("Garri");

//sort 
let numbers = [10,4,7,9,3,1,];
let sorted = foods.sort((a,b)=>a-b);




// console.log(foods.sort());

//join
let res = foods.join(",");
let take = res.split(",")

const url ="www.jumia.com.ng/generic-duvet-and-bedsheet-pillow-cases-plain-grey-60484290";

let productName =  url.split("/")[1];
// console.log(productName);

//for , for of , foreach, for in,

// for(let i = 0; i< foods.length-1; i++){
//     let item = foods[i]
//     console.log(item);
// }


// for of

// for(let eachItem of foods){
//     console.log(eachItem);
// }

//forech 

// foods.forEach((food,index)=>console.log(index,food));

//for in 

for(let item in foods){
    console.log(foods[item]);
}


