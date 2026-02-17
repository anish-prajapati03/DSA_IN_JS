/*let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Enter the value"));
}
console.log(arr);*/

// sum of arr

/*let arr = [10, 20, 40, 60, 18];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
console.log("Sum is:" + sum);*/


// Print the max element of the array

let arr = [1, 4, 3, 6, 2, 8, 7, 9,];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log("The max element of the array is:" + max);