let arr = [2, 5, 6, 3, 9, 7, 8, 2];
let i = 0, j = arr.length - 1;
while (i != j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);