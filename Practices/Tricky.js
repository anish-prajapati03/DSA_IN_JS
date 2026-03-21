// Greate than 100 in arr
/*
const arr = [20,45,150,30,,2,9];
let result=arr.filter(num=>num%2===0)
console.log(result)*/

//print dublicate value

let arr = [1,2,1,2,3,6,3]
let result = arr.filter((value,index,array) => {
    return array.indexOf(value)!==index
})
console.log(result);
