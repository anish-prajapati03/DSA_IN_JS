let curr = "madam";
let rev = "";
for (i = curr.length - 1; i >= 0; i--) {
    rev += curr.charAt(i);
}
if (curr == rev) {
    console.log("String is Pallindrom")
}
else {
    console.log("String is not a Pallindrom")

}