let arr = [2, 6, 8, 9, 7, 4];
let n = arr.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }


}
console.log(arr);