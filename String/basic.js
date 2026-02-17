let a = "Prajapati"
console.log(a.length)
console.log(a.slice(0, 5)) //slice the string from start index to end where user want "L - 1"
let s = "Anish"
console.log(s.concat("_", "Prajapati"))  // add another string
console.log(s[1])
console.log(s.charAt(1)) // same as s[]
console.log(s.charCodeAt(1)) // return the ascai value of character

// print each character in new line

let n = "Anish";
for (let i = 0; i <= n.length; i++) {
    console.log(n[i]); // also use here n.charAt(i)
}
 
// Reverse the String
 
let b = "Anish";
let c = "";
for(i = b.length - 1 ; i>=0 ; i--){
    c += b.charAt(i);
}
console.log(c);

