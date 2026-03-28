let minSubarray = (arr) => {
    let minSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.min(arr[i], currentSum + arr[i]);
        minSum = Math.min(minSum, currentSum);
    }

    return minSum;
}
/*let minCircularSubarray = (arr) => {

    let totalSum = 0;

    let maxSum = arr[0], currentMax = arr[0];
    let minSum = arr[0], currentMin = arr[0];

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];

        // max subarray (Kadane)
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSum = Math.max(maxSum, currentMax);

        // min subarray (Kadane)
        currentMin = Math.min(arr[i], currentMin + arr[i]);
        minSum = Math.min(minSum, currentMin);
    }

    return Math.min(minSum, totalSum - maxSum);
}

// Example
console.log(minCircularSubarray([3, -4, 2, -3, -1])); */