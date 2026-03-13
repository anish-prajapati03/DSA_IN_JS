let arr = [2, 5, 6, 3, 9, 7, 8, 2]
let i = 0, j = arr.length - 1;
let max = arr[i]
while (i != j) {
    if (max < arr[i]) {
        max = arr[i]
    }
} console.log("Max element is: " + max)