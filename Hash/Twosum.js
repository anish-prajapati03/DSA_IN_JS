let twoSum = (num, target) => {
    let map = new Map();

    for (let i = 0; i < num.length; i++) {
        if (map.has(target - num[i])) {  // x-y = target so... target - x = y also
            return [i, map.get(target - num[i])] // if value print then return [num[i], target - num[i]];

        } else {
            map.set(num[i], i)
        }
    } return [-1, -1]
}
let num = [1, 8, 9, 7, 6, 3]
console.log(twoSum(num, 10));
