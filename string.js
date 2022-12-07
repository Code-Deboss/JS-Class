//a string is a sequence of chaacter

let name = "Aptech Port Harcourt";
// console.log(name.length);
// let first = name[0];

// let last = name[name.length-1]
//charAt
// let getP = name.charAt(1)

// let getT = name.indexOf('t')

// console.log(getT);

// include

// let result = name.includes("A");
// console.log(result);

//substring
// let myTech = name.substring(2);
// console.log(myTech.toUpperCase());
// let trimData = name.trim();
// console.log(trimData.length);


//split
// let eachChar = name.split(" ");
// console.log(eachChar);
// let joinchaR = eachChar.join("-");
// console.log(joinchaR);

//write a proram that will swap the case of any given string

// e.g MikE => mIKe 
// saMuEl => SAmUeL

// function swapCase(str){
//     let res = '';
//     for(let i=0; i<str.length;i++){
//         let item = str.charAt(i);

//         if(item === item.toUpperCase()){
//             res +=item.toLowerCase();
//         }else{
//             res+=item.toUpperCase();
//         }
//     }

//     return res;
// }

// console.log(swapCase("MikE"));

//return the winner between upper and lower case characters in any given string

function caseBattle(str){
let uppercount = 0;
let lowercount = 0;

for(let i=0; i<str.length; i++){
    let chara = str.charAt(i);

    if(chara===chara.toUpperCase()){
        uppercount+=1;
    }else{
        lowercount+=1;
    }
}
let output;
if(uppercount > lowercount){
output = "Uppercase wins";
}
else if(lowercount > uppercount){
    output =  "Lowercase win";
}else{
    output = "Draw";
}

return output;
}

// console.log(caseBattle("Love"));

//write a sctipt that will mulpliply the vowels in a given string by a mulplier

// Love , 3 => Loooveee
// aptech , 5 => aaaaapteeeeech

function repeatVowel(str, mul){
    let vowel = "aioeuAIOEU";
    let result = "";
  for(let i=0;i<str.length;i++){
    let item =  str.charAt(i);

    if(vowel.includes(item)){
        result+=myRepeat(item,mul);
    }else{
        result+=item;
    }
  }
return result;
}

function myRepeat(letter, times){
  let word = "";
    for(let i=0;i<times;i++){
     word +=letter
    }
    return word;
}

// console.log(repeatVowel("Love",3));

// console.log(myRepeat("noble",5));

//write a program that will the return the length of  duplicte character from any given string
// ada = > 2;
// mike  =>0

function LnegthofdUPL(str){
let word = [];
let dupl = []

for(let i=0; i<str.length;i++){
let item = str.charAt(i);

 if(!word.includes(item)){
    word.push(item);
 }else{
    dupl.push(item)
 }
}
return dupl.length;
}

console.log(LnegthofdUPL("Loovee"));




