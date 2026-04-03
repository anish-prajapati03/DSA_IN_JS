let arr = [1, 2, 5, 1, 2, 6, 5]
let unique = []

for (let n of arr) {
    if (!unique.includes(n)) {
        unique.push(n)
    }
}
console.log(unique);
