/*let s = "Anish"
let rev = ""
for(let i=s.length-1 ; i>=0 ; i--){
    rev=rev+s.charAt(i);
}
console.log(rev);


let n = "Anish"
let arr=n.split("") //convert string to array
let i= 0, j=n.length-1;
while(i<j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
n=arr.join("")//back to string
console.log(n);
 

let n = "Anish";
 console.log(n.split("").reverse().join("")); 


let s = prompt("Enter the String");
let ispalindrom = true;
let i = 0, j = s.length - 1;
while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
        ispalindrom = false;
        break;
    }
    i++;
    j--;
}
if (ispalindrom) {
    console.log("This String is Pallindrom");
}
else {
    console.log("This String is not Pallindrom");
}*/

let n = prompt("Enter the String");
if(n===n.split("").reverse().join("")){ // split used for string to arry, join is used for arry to string
    console.log("Palindrom");  
}
else{
    console.log(" Not Palindrom");  
    
}

