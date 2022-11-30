const products = [
    {
        color:'white',
        price:5000,
        name:'T-shirt'
    },
    {
        color:'black',
        price:3000,
        name:'Basic T-shirt'
    },
    {
        color:'white',
        price:1000,
        name:'Short'
    },
    {
        color:'red',
        price:2000,
        name:'Wet lips'
    }
]

// let numbers = [2,8,1,0];
// let letter = ['bola','godrice','obinna','ade']
//sort


// let sortedItem = products.sort((a,b)=>a.color>b.color?1:-1);
// console.log(sortedItem);

// sorted by NANE 
const sortByName = products.sort((a,b)=>a.name > b.name?-1:1);
console.log(sortByName);

let num = 12;
// let res = (num > 12)?1:-1;
let res;

if(num > 12){
    res = 1
}else{
    res = -1;
}

console.log(res);