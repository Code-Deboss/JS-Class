const arr = [2,5,7,9, 5, 7, 10];

// ouput = [5,7 ]

function removeDup(arr){
    let result = [];
    let dp =[];
    for(let i=0; i<arr.length; i++){
      let item = arr[i];
      if(!result.includes(item)){
        result.push(item);

      }else{
      dp.push(item);
      }

    }
    return dp;

}

console.log(removeDup(arr));

//return the index of array which sum equal to the target, dont use any number twice

const numbers = [2,4,7,20], target = 11
// [1,2]

numbers = [1,3,6], target = 4
//[0,1]

numbers = [1,2,3], target = 50
//[]

//write a script that will return the elemnt of array whose
//value is below the given target

arr = [3,5,6,8,30,45], target=20
//[3,5,6,8]

arr2 = [40,50,20, 60], target = 10;
//[]

arr3  = [40,50,20, 60], target = 45;
//[20,40]

