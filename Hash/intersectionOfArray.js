/* let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let result = arr1.filter(item => arr2.includes(item))
console.log(result) */

let interSec = (arr1, arr2) => {
    let set = new Set(arr1)
    let res = []
    for (let num of arr2) {
        if (set.has(num))
            res.push(num)
    }
    return [...new Set(res)]
}
console.log(interSec([1, 2, 2, 3], [2, 3, 4]));
