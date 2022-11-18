//functiona
// hoisting
// declarion
// pay();
// getName()
//expression


// let pay = function(){console.log('Maga don pay');}

// pay();

// function getName(name,age){
//     // console.log("You are welcome: "+name);
//     console.log(arguments);
// }
// getName("Favour",23)
// // getName("Gadi")

// function payment(basic_salary,bonus=5){
//   return basic_salary + bonus;
// }

// console.log(payment(23));

// function sumEven(number){
//     let sum = 0;
//  for(let i=1; i<=number; i++){
//     if(i % 2 ===0)
//   sum += i;
//  }
//  return sum;
// }
// const result= sumEven(5);
// console.log(result);

// write a program that will repeat the vowel in a given string 
// by the number of times factor

// love , 2 // loovee

// aptech , 3 // aaapteeech

// hello , 1 // hello


// let k = "a";
// console.log(k.repeat(2));

function repeatVowel(str, times){
    if(times===1){
        return str;
    }
    
    str.toLowerCase();
    let vowel ="aeiou";
    let splitwrd = vowel.split("");
    let final = "";    

  for(let i=0; i<str.length; i++){
  
    let letter = str.charAt(i);
    if(splitwrd.includes(letter)){
   final += myrepeat(letter, times);
    }else{
        final +=letter;
    }
   
  }
  return final;
}

function myrepeat(str, mul){
    let repeated = "";
    for(let i =0; i<mul;i++){
        repeated += str;
    }
    return repeated;
}

// console.log(myrepeat("love",10));



// console.log(repeatVowel("hello",1));

//return the winner between vowel and consonants in a given string. If there is no 
// winner return  draw

// "love" => draw
// "aptech" => consonant wins
// "ebube" -> vowel wins

function batte(str){
  str.toLowerCase();

  let vo = 0;
  let con = 0;

  let vowels = ["a","e","i","o","u"];

  for(let i=0; i<str.length; i++){
    let val = str[i];
  
    if(vowels.includes(val)) {
        vo++;
    }else{
    con++;
    }
}
    if(vo > con){
        console.log("vowels wins");
    }else if(vo < con){
        console.log("Consonant wins");
    }else{
        console.log("draw");
    }

}

// batte("aptech")

function oddmultiply(number){
    var total = 1;

    for (var i =1; i <= number; i++){
        if (i % 2 !== 0){
            total *= i
        }
    }
    
    return total
}


console.log(oddmultiply(10))





