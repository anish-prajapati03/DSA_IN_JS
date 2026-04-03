// input "hello world JS"
// output "JS world hello"

/* 
#1
let str = "hello world JS"
let result = str.split(" ").reverse().join(" ")
console.log(result);

#2
let str = "hello world JS"
let word = str.split(" ")
result = []

for (let i = word.length - 1; i >= 0; i--) {
    result.push(word[i])
}
let finalResult = result.join(" ")

console.log(finalResult);*/

// input anish prajapti
// output Anish prajapti

let str = "anish prajapti"
let res = str[0].toUpperCase()
for (let i = 1; i < str.length; i++) {
    res += str[i]
}
console.log(res);


