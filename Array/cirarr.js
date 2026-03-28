let maxCircularSubarray = (arr) => {

    let totalSum = 0;
    let maxSum = arr[0], currentMax = arr[0];
    let minSum = arr[0], currentMin = arr[0];

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];

        // Kadane for max
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSum = Math.max(maxSum, currentMax);

        // Kadane for min
        currentMin = Math.min(arr[i], currentMin + arr[i]);
        minSum = Math.min(minSum, currentMin);
    }

    // Edge case: all negative
    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, totalSum - minSum);
}

// Example
console.log(maxCircularSubarray([5, -3, 5]));