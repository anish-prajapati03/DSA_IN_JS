let arr = ["Anish", "Prajapti", "CSE"]
let long = arr.reduce((a, b) => a.length > b.length ? a : b)
console.log(long);
