let arr = [10, 20, 30, 40, 50]
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i]
    } elseif(arr[i] > smax && max != arr[i])
    smax = arr[i];



} console.log("Second Max element is: " + Smax);


