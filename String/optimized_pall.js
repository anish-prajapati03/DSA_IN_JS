let a = "madam";
let ispallindom = true;
let i = 0; let j = a.length - 1;
while (i < j) {
    if (a.charAt(i) != a.charAt(j)) {
        ispallindom = false;
        break
    }
    i++
    j--
}
if (ispallindom) {
    console.log("String is pallindrom");
}
else {
    console.log("String is not pallindrom");

}