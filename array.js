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
``

// for of

// for(let eachItem of foods){
//     console.log(eachItem);
// }

//forech 

// foods.forEach((food,index)=>console.log(index,food));

//for in 

// for(let item in foods){
//     console.log(foods[item]);
// }

//copy array

const soccer = ["Messi","Ronaldo","Benzema","Modric"];
const club = ["Chelsea","RealMadrid","PSG"];

let copy = [];

// copy = [...soccer, "=>",...club];
// console.log(copy);

// for(let soc of soccer){
//     if(soc.startsWith("M"))
//     copy.push(soc);
    
// }
// console.log(copy);


// copy = club.slice(0);
// console.log(copy);

let lenth = club.length;
for(let i = 0; i < lenth; i++){
    copy.push(club[i]);

}

// console.log(copy);

const users = [
    {
        "id":1,
        "firstname":"Adebayo",
        "lastname":"Michael",
        "age":23,
        "gender":"male",
        "subjects":["Java","C++","Javasript"]
    },
    {
        "id":2,
        "firstname":"Promise",
        "lastname":"Faithful",
        "age":19,
        "gender":"female",
        "subjects":["HTML","Javasript"]
    },

    {
        "id":3,
        "firstname":"Salisu",
        "lastname":"Buhari",
        "age":72,
        "gender":"male",
        "subjects":["Animal Husbandry"]
    },

    {
        "id":4,
        "firstname":"Okowa",
        "lastname":"Ifeanyi",
        "age":33,
        "gender":"female",
        "subjects":["C#","Python++"]
    },
]
//filter

function getgender(gender){
 const filterGender = users.filter(user=>user.gender===gender);
 return filterGender;
}

// console.log(users);

// console.log(getgender("female"));

function getgenderwithage(gender, age){
    const resilt = users.filter(user=>user.gender===gender && user.age>=age);
    return resilt;
}

//get a specific user


function getUser(id){
    let userid = users.find(user=>user.id===id)
//   const person = users.filter(user=>user.id===id);
//   return person;
if(userid !==undefined){
    return userid;
}else{
    return "User with id "+id +" does not found";
}


}

// console.log(getgenderwithage("female",20));

// let btn = document.querySelector(".btn");

// btn.addEventListener("click",()=>{
//     let gender = document.querySelector(".sex").value;
//     console.log(getgender(gender));

// });

console.log(getUser(9));







