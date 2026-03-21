let isPrime = (num) => {
    if (num <= 1) return false

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true

}
let arr = [1, 3, 2, 6, 5, 4, 9, 21, 25, 17, 48]
let result = arr.filter(num => isPrime(num))
console.log(result);
