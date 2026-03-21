let arr = [8, 1, 9, 6, 4, 7];
n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[minindex] > arr[j])
            minindex = j;
    }
    if (minindex != i) {
        let temp = arr[minindex];
        arr[minindex] = arr[i];
        arr[i] = temp;
    }

}
console.log(arr);


/**function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;

        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}**/