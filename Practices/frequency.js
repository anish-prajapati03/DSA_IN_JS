const prompt = require("prompt-sync")();

let s = prompt("Enter the String: ");
let arr = new Array(128).fill(0);

// Count frequency
for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);
    arr[indx] = arr[indx] + 1;
}

// Print neatly in input order
for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);
    if (arr[indx] > 0) {
        console.log(`${s[i]} appears ${arr[indx]} times`);
        arr[indx] = 0; // reset so it doesn’t print duplicate chars
    }
}
