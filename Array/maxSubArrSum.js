/*let maxSubarray = (arr) => {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));  // o/p : 6 */

let maxSubarray = (arr) => {
    let maxSum = arr[0];
    let currentSum = arr[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;   // new subarray starts
        } else {
            currentSum = currentSum + arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: maxSum,
        subarray: arr.slice(start, end + 1)
    };
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])); // output: { maxSum: 6,
                                                   //subarray: [4, -1, 2, 1]}

