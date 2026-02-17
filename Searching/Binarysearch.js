let binarySearch = (arr, target) => {
    let first = 0, last = arr.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) return "Element found at " + mid;
        arr[mid] > target ? last = mid - 1 : first = mid + 1;
    }
    return -1;
};
let arr = [1, 2, 4, 8, 9, 12, 15, 18, 20]
console.log(binarySearch(arr, 18));

