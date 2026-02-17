let arr = [10, 9, 8, 7, 9, 10, 2, 8, 2]
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
} console.log(map);
let sum = 0;
for(let value of map.values()){
    sum+=value
}
console.log(sum);

