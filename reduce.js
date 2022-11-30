

function sumAll(num){
    let sum = 0;
    for(let i=0; i<num.length;i++){
        sum += num[i];
    }
    return sum;
}

 let numbers = [2,5,7,2];
// console.log(sumAll(numbers));

// second method

const summation = numbers.reduce((acc,current)=>acc+current,0);
// console.log(summation);

let values = [1,5,8,-2,7,-1];
const onlyPositive = values.
                        filter(number=>number > 0)
                        .map(number=>number * number)
                        .filter(number =>number > 30)
                        .reduce((acc,val)=>acc + val,0)
                        

// console.log(onlyPositive);

function secondMethod(num){
    const grethanZero = [];
    const mul = [];
    let sum = 0;
  for(let i=0; i<num.length;i++){
    let item = num[i];
    if(item > 0){
    grethanZero.push(item);
    }
  }
   for(let i=0; i<grethanZero.length;i++){
    multipler = 1;
    let item = grethanZero[i];
        
    multipler = item * item;
    mul.push(multipler);
  }
for(let val of mul){
    if(val > 30){
        sum +=val;
    }
}
 
return sum;
}

console.log(secondMethod(values));








